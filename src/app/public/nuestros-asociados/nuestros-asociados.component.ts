import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nuestros-asociados',
  templateUrl: './nuestros-asociados.component.html',
  styleUrls: ['./nuestros-asociados.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class NuestrosAsociadosComponent {
  images = [
    {
      img: '/assets/img/DanielaGonzales.jpg',
      name: 'Daniela Gonzales',
      desc: 'Ser profesional en desarrollo familiar  es el compromiso permanente para generar conexiones con las personas  según particularidades y contextos. Es la oportunidad de hablar de la  familia desde un rol activo en la sociedad y por ende su protagonismo en la resignificación de practicas y discursos parentales. A nivel  personal, es una profesión que me ha permitido adquirir aprendizajes de  la propia vida familiar a fin de mantener un clima cálido y armonioso,  asi como afianzar mi proceso de relacionamiento familiar.'
    },
    {
      img: 'assets/img/MonicaOsorio.jpg',
      name: 'Mónica Osorio',
      desc: 'Ser profesional en desarrollo Familiar significa ser parte de procesos de cambio, reconociendo y potenciando capacidades a nivel familiar que se visibilizan en la sociedad, desde mi profesión aporto a que la familia logre espacios de vida familiar fortaleciendo vínculos'
    },
    {
      img: 'assets/img/testimomio.jpg',
      name: 'Ferney Trejos Montes',
      desc: 'El significado que tiene para mi ser profesional en desarrollo familiar, es ser un agente que moviliza y genera acciones transformativas en las familias y comunidades de la zona rural del Municipio de Riosucio Caldas, reconociendo las diferentes etapas del curso de vida que tiene cada persona en especial aquellos que se encuentran en su infancia, siendo esta una etapa fundamental para el desarrollo de habilidades sociales y la toma de conciencia del entorno.'
    }
  ];

  swiperConfig = {
    centeredSlides: true, 
    paginationClickable: true, 
    spaceBetween: 30, 
    loop: true, 
    autoplay: { delay: 2000, disableOnInteraction: false, }, 
    speed: 1000, 
    pagination: { el: '.swiper-pagination', clickable: true, }, 
    effect: 'fade', 
    slidesPerView: 1,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  };
}
