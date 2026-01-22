import { Component, OnInit } from '@angular/core';
import { AngularModels } from '../models/angularModels';
import { AngularServices } from '../services/angularServices';


@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',

})

export class Formulario  {

  task: AngularModels = {
    userId: 1,
    title: '',
    completed: false
  };

   constructor(private taskService: AngularServices) {}

  crear(): void {
    this.taskService.createTask(this.task).subscribe({
      next: res => console.log('CREADO', res),
      error: err => console.error(err)
    });
  }

  editar(): void {
    const id = 1; // normalmente viene de la lista
    this.taskService.updateTask(id, this.task).subscribe({
      next: res => console.log('EDITADO', res),
      error: err => console.error(err)
    });
  }
}