import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  
  isMenuOpen = false;

  toggleMenu(): void {   
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  } 

 
}
