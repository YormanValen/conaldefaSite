import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';
import { ResolucionesService } from 'src/app/services/resoluciones.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];
  resoluciones: any[] = [];

  constructor(private noticiasService: NoticiasService, private resolucionesServices: ResolucionesService , private router: Router) {}

  ngOnInit(): void {
   this.obtenerNoticas();
   this.obtenerResoluciones();
  }

  obtenerResoluciones() {
    this.resolucionesServices.getResoluciones().subscribe((data) => {
      this.resoluciones = data;
      console.log(data);
    });
  }

  obtenerNoticas() {
    this.noticiasService.getNoticias().subscribe((data) => {
      this.noticias = data;
      console.log(this.noticias);
    });
  }

  verMas(id: number) {
    this.router.navigate(['/noticia', id]);
  }
}
