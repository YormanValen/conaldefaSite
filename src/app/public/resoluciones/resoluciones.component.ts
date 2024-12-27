import { Component } from '@angular/core';
import { ResolucionesService } from 'src/app/services/resoluciones.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resoluciones',
  templateUrl: './resoluciones.component.html',
  styleUrls: ['./resoluciones.component.css'],
})
export class ResolucionesComponent {
  resoluciones: any[] = [];

  constructor(
    private resolucionesServices: ResolucionesService,
    private router: Router
  ) {}

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
