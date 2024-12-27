import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GraduateService } from 'src/app/services/graduate.service';
import { GraduateModalComponent } from '../graduate-modal/graduate-modal.component';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'app-consultar-graduados',
  templateUrl: './consultar-graduados.component.html',
  styleUrls: ['./consultar-graduados.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConsultarGraduadosComponent {
  cedula: string = '';
  graduate: any = null;
  error: string = '';
  isLoading: boolean = false;

  constructor(private graduateService: GraduateService, private dialog: MatDialog) {}

  async searchGraduate() {
    this.isLoading = true;
    try {
      this.graduate = await this.graduateService.getGraduateByCedula(this.cedula);
      this.error = '';
  
      const today = new Date();
      const vigenciaDate = new Date(this.graduate.vigencia); 
      
      if (vigenciaDate < today) {
        this.openErrorModal('Profesional no vigente en consulta pública comunicarse con conaldefa@gmail.com');
      } else {
        this.openGraduateModal(this.graduate);
      }
    } catch (err) {
      this.graduate = null;
      this.error = 'No se encontró el graduado';
      this.openErrorModal(this.error);
    } finally {
      this.isLoading = false;
    }
  }
  

  openGraduateModal(graduate: any) {
    this.dialog.open(GraduateModalComponent, {
      data: graduate,
    });
  }

  openErrorModal(error: string) {
    this.dialog.open(ErrorModalComponent, {
      data: error,
    });
  }
}
