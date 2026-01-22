
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularModels } from '../models/angularModels';

@Injectable({
  providedIn: 'root'
})
export class AngularServices {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  // GET - Obtener todas
  getTasks(): Observable<AngularModels[]> {
    return this.http.get<AngularModels[]>(this.apiUrl);
  }

  // GET - Obtener por ID
  getTaskById(id: number): Observable<AngularModels> {
    return this.http.get<AngularModels>(`${this.apiUrl}/${id}`);
  }

  // POST - Crear nueva
  createTask(crear: AngularModels): Observable<AngularModels> {
    return this.http.post<AngularModels>(this.apiUrl, crear);
  }

  // PUT - Actualizar
  updateTask(id: number, crear: AngularModels): Observable<AngularModels> {
    return this.http.put<AngularModels>(`${this.apiUrl}/${id}`, crear);
  }

  // DELETE - Eliminar
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}