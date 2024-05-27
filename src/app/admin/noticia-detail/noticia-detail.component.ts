import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia } from '../../models/noticias.model';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.css']
})
export class NoticiaDetailComponent implements OnInit {
  
  noticia: Noticia | undefined;

  constructor(
    private route: ActivatedRoute,
    private noticiaService: NoticiasService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noticiaService.getNoticia(id).subscribe((data: Noticia) => {
      this.noticia = data;
    });
  }
}
