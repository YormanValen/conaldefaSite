import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor(private noticiasService: NoticiasService, private router: Router) {}

  ngOnInit(): void {
    this.noticiasService.getNoticias().subscribe((data) => {
      this.noticias = data;
      console.log(this.noticias);
    });
  }

  verMas(id: number) {
    this.router.navigate(['/noticia', id]);
  }
}
