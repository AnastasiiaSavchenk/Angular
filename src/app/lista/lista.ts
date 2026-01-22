import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularServices } from '../services/angularServices';
import { AngularModels } from '../models/angularModels';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html',
  standalone: false,
  styleUrl: './lista.css'
})
export class Lista implements OnInit {

  ejemplos: AngularModels[] = [];
  loading = true;
  error = '';

  constructor(private angularService: AngularServices, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listaGet();
  }

  listaGet(): void {
    this.loading = true;
    this.angularService.getTasks().subscribe({
      next: data => {
        this.ejemplos = data.slice(0, 20); // limitar a 20 elementos
        this.loading = false;
        this.cdr.detectChanges(); 
      },
      error: err => {
        console.error('Error al cargar ejemplos:', err);
        this.error = 'No se pudo cargar la lista';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  verPorId(id: number | undefined): void {
    if (!id) return;
    this.angularService.getTaskById(id).subscribe({
      next: data => {
        alert(`ID: ${data.id}\nTítulo: ${data.title}\nCompletado: ${data.completed}`);
      },
      error: err => console.error(err)
    });
  }
    borrar(id: number | undefined): void {
    if (!id) return;
    const ejemplo = this.ejemplos.find(e => e.id === id);
    if (!ejemplo) return;

    const confirmar = confirm(
      `¿Quieres borrar este ejemplo?\n\nID: ${ejemplo.id}\nTítulo: ${ejemplo.title}\nCompletado: ${ejemplo.completed}`
    );

    if (confirmar) {
      this.ejemplos = this.ejemplos.filter(e => e.id !== id);
      console.log(`Ejemplo borrado:`, ejemplo);
    }
  }
}
