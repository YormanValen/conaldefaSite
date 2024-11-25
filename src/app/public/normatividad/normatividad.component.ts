import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ResolucionesService } from 'src/app/services/resoluciones.service';


@Component({
  selector: 'app-normatividad',
  templateUrl: './normatividad.component.html',
  styleUrls: ['./normatividad.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class NormatividadComponent implements OnInit {
  resoluciones: any[] = [];

  constructor(private resolucionesServices: ResolucionesService , private router: Router) {}

  ngOnInit(): void {
    this.obtenerResoluciones();
   }

   obtenerResoluciones() {
    this.resolucionesServices.getResoluciones().subscribe((data) => {
      this.resoluciones = data;
      console.log(data);
    });
  }

  verMas(id: number) {
    this.router.navigate(['/noticia', id]);
  }

 
}

