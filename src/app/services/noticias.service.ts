import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private apiUrl = 'http://127.0.0.1:8000/index'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
