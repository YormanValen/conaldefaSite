import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactComponent {
  successMessage: string | null = null;

  constructor(private contactService: ContactService) { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      this.contactService.sendContactForm(contactForm.value).subscribe(
        response => {
          console.log(response);
          this.successMessage = 'Correo enviado exitosamente.';
          contactForm.reset();
          setTimeout(() => {
            this.successMessage = null;
          }, 5000); // Oculta el mensaje después de 5 segundos
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
