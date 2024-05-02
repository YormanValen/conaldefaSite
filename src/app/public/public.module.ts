import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwiperComponent } from './swiper/swiper.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RedInstitucionalComponent } from './red-institucional/red-institucional.component';
import { AcceptTermsDialogComponent } from './accept-terms-dialog/accept-terms-dialog.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NormatividadComponent } from './normatividad/normatividad.component';

@NgModule({
  declarations: [SwiperComponent, HomeComponent, QuienesSomosComponent, RedInstitucionalComponent, AcceptTermsDialogComponent, ServiciosComponent, NormatividadComponent],
  imports: [CommonModule],
  exports: [SwiperComponent, HomeComponent, QuienesSomosComponent, RedInstitucionalComponent, AcceptTermsDialogComponent, ServiciosComponent, NormatividadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PublicModule {}
