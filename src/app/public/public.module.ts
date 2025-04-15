import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { SwiperComponent } from './swiper/swiper.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RedInstitucionalComponent } from './red-institucional/red-institucional.component';
import { AcceptTermsDialogComponent } from './accept-terms-dialog/accept-terms-dialog.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NormatividadComponent } from './normatividad/normatividad.component';
import { MatriculateComponent } from './matriculate/matriculate.component';
import { InfoMatriculaDialogComponent } from './info-matricula-dialog/info-matricula-dialog.component';
import { NuestrosAsociadosComponent } from './nuestros-asociados/nuestros-asociados.component';
import { CodigoDeEticaComponent } from './codigo-de-etica/codigo-de-etica.component';
import { ReporteDeCasosComponent } from './reporte-de-casos/reporte-de-casos.component';
import { ConsultarGraduadosComponent } from './consultar-graduados/consultar-graduados.component';
import { GraduateModalComponent } from './graduate-modal/graduate-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  declarations: [
    SwiperComponent,
    HomeComponent,
    QuienesSomosComponent,
    RedInstitucionalComponent,
    AcceptTermsDialogComponent,
    ServiciosComponent,
    NormatividadComponent,
    MatriculateComponent,
    InfoMatriculaDialogComponent,
    NuestrosAsociadosComponent,
    CodigoDeEticaComponent,
    ReporteDeCasosComponent,
    ConsultarGraduadosComponent,
    GraduateModalComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule // Agregar FormsModule aquí
  ],
  exports: [
    SwiperComponent,
    HomeComponent,
    QuienesSomosComponent,
    RedInstitucionalComponent,
    AcceptTermsDialogComponent,
    ServiciosComponent,
    NormatividadComponent,
    MatriculateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PublicModule {}
