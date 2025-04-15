import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolucionesService } from '../../services/resoluciones.service';
import { Resolution } from '../../models/resolution.model';

@Component({
  selector: 'app-resolution-detail',
  templateUrl: './resolution-detail.component.html',
  styleUrls: ['./resolution-detail.component.css']
})
export class ResolutionDetailComponent implements OnInit {
  resolution: Resolution | undefined;

  constructor(
    private route: ActivatedRoute,
    private resolutionService: ResolucionesService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.resolutionService.getResolucion(id).subscribe((data: Resolution) => {
      this.resolution = data;
    });
  }

   // Método para obtener la URL completa del PDF
  getPdfUrl(pdfFile: string): string {
    return `https://admin.conaldefa.org/${pdfFile}`;
  }
}
