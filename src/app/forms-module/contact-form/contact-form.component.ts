import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactComponent {
  successMessage: string = '';

  constructor(private contactService: ContactService) { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      this.contactService.sendContactForm(contactForm.value).subscribe(
        response => {
          // Mostrar mensaje de éxito
          this.successMessage = 'Mensaje enviado correctamente.';
          // Limpiar el formulario
          contactForm.resetForm();
        },
        error => {
          console.error('Error al enviar el mensaje', error);
        }
      );
    }
  }
}
