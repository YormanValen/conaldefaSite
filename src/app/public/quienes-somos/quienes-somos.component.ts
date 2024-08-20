import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
})
export class QuienesSomosComponent implements OnInit {
  members = [
    {
      img: '/assets/img/nuestra_junta/gabriel.png',
      name: 'Gabriel Gallego Montes',
      position: 'Presidente',
      education:
        'Doctor en Estudios de Población, El Colegio de México; Magíster en Planeación y Administración del Desarrollo Regional, CIDER, Universidad de los Andes; Profesional en Desarrollo Familiar, Universidad de Caldas.',
      experience:
        'Docente en la Universidad de Caldas, Coordinador de Maestría en Género, y Presidente de CONALDEFA. Especializado en desarrollo familiar y evaluación de proyectos agropecuarios.',
    },
    {
      img: '/assets/img/nuestra_junta/carmenza.png',
      name: 'Carmenza Pérez',
      position: 'Vicepresidenta',
      education: 'Datos de educación aquí...',
      experience: 'Datos de experiencia aquí...',
    },
  ];
  swiperConfig = {
    centeredSlides: true,
    paginationClickable: true,
    navigation: true, // Ajustar para activar la navegación
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3000, // Ajusta el tiempo de espera
      disableOnInteraction: false,
    },
    speed: 800, // Ajusta la velocidad del cambio de diapositiva
    effect: 'slide', // Si 'fade' te da problemas, usa 'slide'
    slidesPerView: 1,
    
  };

  constructor(private wowService: NgwWowService) {}

  ngOnInit() {}

  reset() {}
}
