import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AcceptTermsDialogComponent } from '../../public/accept-terms-dialog/accept-terms-dialog.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit  {
  
  constructor(private router: Router, private viewportScroller: ViewportScroller, public dialog: MatDialog) { }
  sliderImages = [
    '/assets/webp/banner_1.webp',
    '/assets/webp/banner_2.webp',
    '/assets/webp/banner_3.webp',
    '/assets/webp/banner_4.webp',
    '/assets/webp/banner_5.webp',
    '/assets/webp/banner_6.webp',

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
  
  ngOnInit() {
    //this.openDialog();
 }

 openDialog(): void {
   this.dialog.open(AcceptTermsDialogComponent, {
     disableClose: true, // Esto evita que el usuario cierre el diálogo haciendo clic fuera del mismo
   });
 }

 
}
