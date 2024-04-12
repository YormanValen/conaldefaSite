import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
  },
  //quiero una ruta que cuando inicie la app valla al home.component
  {
    path: 'home',
    loadChildren: () => import('./public/home/home.component').then((m) => m.HomeComponent),
  },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: '**', redirectTo: 'public' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
