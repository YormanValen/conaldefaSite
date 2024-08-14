import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { QuienesSomosComponent } from './public/quienes-somos/quienes-somos.component';
import { RedInstitucionalComponent } from './public/red-institucional/red-institucional.component';
import { ServiciosComponent } from './public/servicios/servicios.component';
import { NormatividadComponent } from './public/normatividad/normatividad.component';
import { MatriculateComponent } from './public/matriculate/matriculate.component';
import { NoticiasComponent } from './admin/noticias/noticias.component';
import { NoticiaDetailComponent } from './admin/noticia-detail/noticia-detail.component';
import { ResolutionDetailComponent } from './admin/resolution-detail/resolution-detail.component';
import { NuestrosAsociadosComponent } from './public/nuestros-asociados/nuestros-asociados.component';
import { CodigoDeEticaComponent } from './public/codigo-de-etica/codigo-de-etica.component';
import { ReporteDeCasosComponent } from './public/reporte-de-casos/reporte-de-casos.component';

const routerOptions: ExtraOptions = {};

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'red-institucional', component: RedInstitucionalComponent },
  { path: 'nuestros-servicios', component: ServiciosComponent },
  { path: 'normatividad', component: NormatividadComponent },
  { path: 'matriculate', component: MatriculateComponent },
  { path: 'noticias', component: NoticiasComponent }, // Agregar la ruta de noticias
  { path: 'nuestros-asociados', component: NuestrosAsociadosComponent },
  { path: 'noticias/:id', component: NoticiaDetailComponent },
  { path: 'resoluciones/:id', component: ResolutionDetailComponent },
  { path: 'código deontológico', component: CodigoDeEticaComponent },
  { path: 'reporte de casos', component: ReporteDeCasosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
