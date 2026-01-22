import { Component } from '@angular/core';
import { AngularModels } from '../models/angularModels';
import { AngularServices } from '../services/angularServices';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
  standalone: false,
})
export class Formulario {

  task: AngularModels = {
    userId: 1,
    title: '',
    completed: false
  };

  constructor(private taskService: AngularServices) {}

  // Crear (POST)
  crear(): void {
    if (!this.task.title.trim()) {
      alert('Escribe un título para la tarea');
      return;
    }

    this.taskService.createTask(this.task).subscribe({
      next: res => {
        alert(`✅ Tarea creada:\nID: ${res.id}\nTítulo: ${res.title}\nCompletado: ${res.completed}`);
        // Opcional: limpiar formulario
        this.task.title = '';
        this.task.completed = false;
      },
      error: err => alert(`❌ Error al crear tarea: ${err.message || err}`)
    });
  }

  // Editar (PUT)
  editar(): void {
    const id = 1; // normalmente viene de la lista
    this.taskService.updateTask(id, this.task).subscribe({
      next: res => {
        alert(`✏️ Tarea editada:\nID: ${res.id}\nTítulo: ${res.title}\nCompletado: ${res.completed}`);
      },
      error: err => alert(`❌ Error al editar tarea: ${err.message || err}`)
    });
  }
}
