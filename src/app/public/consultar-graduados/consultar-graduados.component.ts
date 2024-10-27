import { Component } from '@angular/core';
import { GraduateService } from 'src/app/services/graduate.service';

@Component({
  selector: 'app-consultar-graduados',
  templateUrl: './consultar-graduados.component.html',
  styleUrls: ['./consultar-graduados.component.css']
})
export class ConsultarGraduadosComponent {

  cedula: string = '';
  graduate: any = null;
  error: string = '';
  isLoading: boolean = false; // Indicador de carga

  constructor(private graduateService: GraduateService) { }

  // Método para buscar el graduado, ahora usando async/await
  async searchGraduate() {
    this.isLoading = true; // Iniciar la carga
    try {
      this.graduate = await this.graduateService.getGraduateByCedula(this.cedula);
      this.error = '';
    } catch (err) {
      this.graduate = null;
      this.error = 'No se encontró el graduado';
    } finally {
      this.isLoading = false; // Finalizar la carga
    }
  }
}
