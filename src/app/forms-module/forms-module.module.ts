import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ContactComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Agrega FormsModule al módulo
  ],
  exports: [
    ContactComponent
  ]
})
export class FormsModuleModule { }
