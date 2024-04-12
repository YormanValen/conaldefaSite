import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Agrega FormsModule al módulo
  ],
  exports: [
    ContactFormComponent
  ]
})
export class FormsModuleModule { }
