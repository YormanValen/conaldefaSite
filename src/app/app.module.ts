import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms'; // Importar FormsModule aquí
import { HttpClientModule } from '@angular/common/http';
import { NoticiasComponent } from './admin/noticias/noticias.component'; // Asegúrate de que la ruta sea correcta
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AcceptTermsDialogComponent } from './public/accept-terms-dialog/accept-terms-dialog.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NoticiaDetailComponent } from './admin/noticia-detail/noticia-detail.component';
import { ResolutionDetailComponent } from './admin/resolution-detail/resolution-detail.component';



// register Swiper custom elements
register();

@NgModule({
  declarations: [AppComponent, NoticiasComponent, NoticiaDetailComponent, ResolutionDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    PublicModule,
    AppRoutingModule, // Añade esto para importar tu configuración de rutas
    RouterModule, BrowserAnimationsModule, 
    MatDialogModule,
    HttpClientModule
  
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
