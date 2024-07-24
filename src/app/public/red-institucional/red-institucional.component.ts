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

  sliderImages = [
    '/assets/img/slide_1.png',
    '/assets/img/slide_2.png',
    '/assets/img/slide_3.png',
    '/assets/img/slide_4.png',
    '/assets/img/slide_5.png',
    '/assets/img/slide_6.png',
    '/assets/img/slide_7.png',
    '/assets/img/slide_8.png',
  ];
}
