import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor() { }

  onSubmit(form: NgForm) {
    // Aquí manejas la lógica de envío de datos, por ejemplo, hacer una petición HTTP
    console.log(form.value);
  }
}
