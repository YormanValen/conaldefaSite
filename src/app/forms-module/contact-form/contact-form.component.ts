import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactComponent {

  constructor(private contactService: ContactService) { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      this.contactService.sendContactForm(contactForm.value).subscribe(
        response => {
          console.log(response);
          contactForm.reset();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
