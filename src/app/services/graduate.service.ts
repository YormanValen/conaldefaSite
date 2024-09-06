import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraduateService {

  private apiUrl = 'https://admin.conaldefa.org/graduates'; // Cambia esta URL por tu API real

  constructor(private http: HttpClient) { }

  // Método para obtener información de un graduado por cédula
  getGraduateByCedula(cedula: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?cedula=${cedula}`);
  }
}
