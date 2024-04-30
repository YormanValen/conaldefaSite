import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { QuienesSomosComponent } from './public/quienes-somos/quienes-somos.component';
import { RedInstitucionalComponent } from './public/red-institucional/red-institucional.component';
import { ServiciosComponent } from './public/servicios/servicios.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'red-institucional', component: RedInstitucionalComponent },
  {path: 'nuestros-servicios', component: ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
