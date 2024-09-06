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

  constructor(private graduateService: GraduateService) { }

  // Método para buscar el graduado
  searchGraduate() {
    this.graduateService.getGraduateByCedula(this.cedula).subscribe(
      data => {
        this.graduate = data;
        this.error = '';
      },
      err => {
        this.graduate = null;
        this.error = 'No se encontró el graduado';
      }
    );
  }

}
