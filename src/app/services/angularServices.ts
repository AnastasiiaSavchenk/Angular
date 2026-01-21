import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { AngularModels } from "../models/angularModels"
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})

export class AngularServices {
    private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http:  HttpClient) {}

    // GET

    getEjemplos(): Observable<AngularModels[]> {
    return this.http.get<AngularModels[]>(this.apiUrl);
  }
  //get by ID
  getEjemploById(id: number): Observable<AngularModels> {
    return this.http.get<AngularModels>(`${this.apiUrl}/${id}`);
  }
  
  // POST
  addEjemplo(angExamen: AngularModels): Observable<AngularModels> {
    return this.http.post<AngularModels>(this.apiUrl, angExamen);
  }

  // PUT
  updateEjemplo(angExamen: AngularModels): Observable<AngularModels> {
    return this.http.put<AngularModels>(`${this.apiUrl}/${angExamen.id}`, angExamen);
  }

  // DELETE
  deleteEjemplo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}