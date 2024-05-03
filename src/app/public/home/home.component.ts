import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) { }
  sliderImages = [
    '/assets/webp/banner_1.webp',
    '/assets/webp/banner_2.webp',
    '/assets/webp/banner_3.webp',
    '/assets/webp/banner_4.webp',
  ];

  navigateToQuienesSomos(): void {
    this.router.navigate(['/quienes-somos']);
  }

  navigateToServicios(): void {
    this.router.navigate(['/nuestros-servicios']);
  }

  navigateToRedInstitucional(): void {
    this.router.navigate(['/red-institucional']);
  }
  

 
}
