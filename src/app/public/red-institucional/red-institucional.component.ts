import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-red-institucional',
  templateUrl: './red-institucional.component.html',
  styleUrls: ['./red-institucional.component.css'],
})
export class RedInstitucionalComponent {
  @ViewChild('infoModal') modalRef: ElementRef | undefined;

  public modalTitle: string = '';
  public modalContent: string = '';
  public showModalState: boolean = false;

  countries = [
    {
      name: 'Colombia',
      code: 'CO',
      universidades: [
        'Universidad de Caldas',
        'Universidad Catolica Luis Amigo',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      universidades: [
        'Universidad de Tlaxcala',
        'Universidad Anahuac'
      ],
    },
    {
      name: 'Ecuador',
      code: 'EC',
      universidades: [
        'Universidad de Cuenca'
      ],
    },
    {
      name: 'Chile',
      code: 'CH',
      universidades: [
        'UNIVERSIDAD FINIS TERRAE'
      ],
    },
    {
      name: 'Argentina',
      code: 'AR',
      universidades: [
        'UNIVERSIDAD AUSTRAL'
      ],
    },

  ];

  showModal(event: MouseEvent, countryCode: string, color: string): void {
    const country = this.countries.find((c) => c.code === countryCode);
    if (country) {
      this.modalTitle = country.name;
      this.modalContent = `${country.universidades.join(' - ')}`;
      this.showModalState = true;
  
      // Positioning modal next to the mouse cursor
      if (this.modalRef) {
        let modalElement = this.modalRef.nativeElement;
        modalElement.style.top = `${event.clientY + 5}px`; // 5px offset from cursor
        modalElement.style.left = `${event.clientX + 5}px`;
  
        // Assigning the received color to the modal
        modalElement.style.backgroundColor = color;
      }
    }
  }

  hideModal(): void {
    this.showModalState = false;
  }

  //aqui se definen las imagenes del slider y los links de las imagenes
  slides = [
    { img: "assets/img/slide_1.png", link: "https://www.ucaldas.edu.co/" },
    { img: "assets/img/slide_2.png", link: "https://www.funlam.edu.co/" },
    { img: "assets/img/slide_3.png", link: "https://www.uatx.mx/" },
    { img: "assets/img/slide_4.png", link: "https://www.anahuac.mx/" },
    { img: "assets/img/slide_5.png", link: "https://www.ucuenca.edu.ec/ " },
    { img: "assets/img/slide_6.png", link: "https://www.uft.cl/ " },
    { img: "assets/img/slide_7.png", link: "https://www.austral.edu.ar/ " }
  ];




  
}
