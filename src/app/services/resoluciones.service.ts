import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resolution } from '../models/resolution.model';

@Injectable({
  providedIn: 'root'
})
export class ResolucionesService {
  private apiUrl = 'http://127.0.0.1:8000/api/resolutions'; // Asegúrate de que la URL sea correcta


  constructor(private http: HttpClient) { }

  getResoluciones(): Observable<Resolution[]> { // Change the return type to Observable<Resolution[]>
    return this.http.get<Resolution[]>(this.apiUrl);
  }

  getResolucion(id: number): Observable<Resolution> { // Change the return type to Observable<Resolution>
    return this.http.get<Resolution>(`${this.apiUrl}/${id}`);
  }
}
