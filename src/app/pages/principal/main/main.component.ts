import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isOpen: boolean = false;
  selectedOption: number = 0;


  // Lógica para mostrar/ocultar el menú lateral
  ttoggleSidebar() {
    this.isOpen = !this.isOpen;
  }

}
