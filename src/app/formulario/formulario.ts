import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularServices } from '../services/angularServices';
import { AngularModels } from '../models/angularModels';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
  standalone: false
})
export class Formulario {

  tarea: AngularModels = {
    title: '',
    completed: false
  };

  mensaje: string = '';

  constructor(private service: AngularServices) {}

  guardar(): void {

    // VALIDACIÓN BÁSICA (muy de examen)
    if (!this.tarea.title || this.tarea.title.length < 3) {
      this.mensaje = 'El título es obligatorio (mínimo 3 caracteres)';
      return;
    }

    // 👉 SI HAY ID → PUT
    if (this.tarea.id) {
      this.service.updateTask(this.tarea.id, this.tarea).subscribe(() => {
        this.mensaje = 'Tarea actualizada correctamente';
      });

    // 👉 SI NO HAY ID → POST
    } else {
      this.service.createTask(this.tarea).subscribe(() => {
        this.mensaje = 'Tarea creada correctamente';
      });
    }
  }
}