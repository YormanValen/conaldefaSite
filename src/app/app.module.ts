import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms'; // Importar FormsModule aquí
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { PublicModule } from './public/public.module';
// register Swiper custom elements
register();


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule, PublicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
