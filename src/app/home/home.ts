import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

   mensaje: string = '';
  inputText: string = '';

  // Evento Click
  clickBoton(): void {
    alert('¡Has hecho click en el botón!');
  }

  // Evento Blur
  blurInput(): void {
    this.mensaje = `El input perdió el foco. Valor actual: "${this.inputText}"`;
  }

  // Evento KeyUp
  keyUpInput(event: KeyboardEvent): void {
    this.mensaje = `Has pulsado la tecla: "${(event.target as HTMLInputElement).value}"`;
  }


}
