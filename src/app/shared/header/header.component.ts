import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('menuMobile') menuMobile!: ElementRef;
  @ViewChild('blurCtn') blurCtn!: ElementRef;

  mostrarMenuMobile(): void {
    this.menuMobile.nativeElement.style.transform = "translateX(0%)";
    this.blurCtn.nativeElement.style.display = "block";
  }

  ocultarMenu(): void {
    this.menuMobile.nativeElement.style.transform = "translateX(150%)";
    this.blurCtn.nativeElement.style.display = "none";
  }
}
