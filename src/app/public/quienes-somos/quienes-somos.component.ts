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
      name: 'Maria Carmenza Quintero Cardona',
      position: 'Vicepresidenta',
      education: 'Especialista en Alta Gerencia; Profesional en Desarrollo Familiar.',
      experience: 'Docente universitaria, coordinadora de proyectos sociales, y experiencia en el Instituto Colombiano de Bienestar Familiar y otras entidades. Enfocada en la atención a la primera infancia y adolescencia.',
    },
    {
      img: '/assets/img/nuestra_junta/mariana.png',
      name: 'Mariana Ocampo Díaz ',
      position: 'Secretaria',
      education: 'Profesional en Desarrollo Familiar.',
      experience: 'Experta en intervención familiar con roles importantes en ICBF y el Centro de Desarrollo Comunitario Versalles, enfocada en la prevención de violencia intrafamiliar y el desarrollo de proyectos sociales.',
    },
    {
      img: '/assets/img/nuestra_junta/mariaVictoria.png',
      name: 'María Victoria Álvarez Vélez',
      position: 'Presidente suplente',
      education: 'Profesional en Desarrollo Familiar; Especialista en Docencia e Investigación Universitaria, Gestión y Desarrollo Humano, y Gestión Educativa.',
      experience: 'Amplia trayectoria en el trabajo con familias y adolescentes, tanto en el sector público como privado, con experiencia en administración y docencia universitaria.',
    },
    {
      img: '/assets/img/nuestra_junta/ocar.png',
      name: 'Oscar Emilio Gómez Uribe',
      position: 'Secretario suplente',
      education: 'Profesional en Desarrollo Familiar; Maestría en Estudios Teológicos; Diplomado en Libertad Religiosa y Consejería Bíblica.',
      experience: 'Pastor y presidente de la corporación Adonai Vida y Dignidad, con habilidades en comunicación, liderazgo y trabajo comunitario.',
    },
    {
      img: '/assets/img/nuestra_junta/ovidio.png',
      name: 'Ovidio Herrera Rivera ',
      position: 'Vicepresidente suplente',
      education: 'Doctor en Pensamiento Complejo; Magíster en Educación; Especialista en Docencia Investigativa Universitaria y Terapia Familiar; Profesional en Desarrollo Familiar.',
      experience: 'Docente investigador en la Universidad Católica Luis Amigó, con enfoque en calidad de vida y desarrollo familiar.',
    },
    {
      img: '/assets/img/nuestra_junta/edison.png',
      name: 'Edinson Hernán Restrepo',
      position: 'Tesorero suplente ',
      education: 'Magister en Derecho Univ. Luis Amigó, (2024). Abogado, Univ. Luis Amigó, (2018). Conciliador Extrajudicial en Derecho, Univ. Luis Amigó, (2017). (Esp. en Derecho Penal y Criminología. Univ. Luis Amigó, (2019).',
      experience: 'Profesional en Desarrollo Familiar. Fundación Univ. Luis Amigó, (2003). Diplomado en Pedagogía para Profesionales No Licenciados. Unaula. (2012). Teólogo con énfasis en Educación Cristiana. Seminario Bíblico de Colombia, (1994). Magister en Derecho Univ. Luis Amigó, (2024)',
    },
    {
      img: '/assets/img/nuestra_junta/mariaClemencia.png',
      name: 'Tesorera',
      position: 'María Clemencia Quintero ',
      education: 'Magíster en Educación y Desarrollo Humano; Especialista en Planeación para la Educación Ambiental; Profesional en Desarrollo Familiar.',
      experience: 'Amplia experiencia en el desarrollo de proyectos educativos y ambientales, con un enfoque en la participación y organización familiar.',
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

  constructor(private wowService: NgwWowService) { }

  ngOnInit() { }

  reset() { }
}
