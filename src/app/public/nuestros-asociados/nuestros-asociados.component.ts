import { Component } from '@angular/core';

@Component({
  selector: 'app-nuestros-asociados',
  templateUrl: './nuestros-asociados.component.html',
  styleUrls: ['./nuestros-asociados.component.css'],
})
export class NuestrosAsociadosComponent {
  images = [
    '/assets/img/asociados_1.jpeg',
    '/assets/img/asociados_2.jpeg',
    '/assets/img/asociados_3.jpeg',
    '/assets/img/asociados_4.jpg',
    '/assets/img/asociados_5.jpeg',
    '/assets/img/asociados_6.jpeg',
    '/assets/img/asociados_7.jpeg',
    '/assets/img/asociados_8.jpeg',
    '/assets/img/asociados_9.png',
    '/assets/img/asociados_10.png',


  ];

  swiperConfig = {
    centeredSlides: false,
    paginationClickable: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'fade',
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };
}
