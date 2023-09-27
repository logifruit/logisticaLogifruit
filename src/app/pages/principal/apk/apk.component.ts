import { Component } from '@angular/core';

@Component({
  selector: 'app-apk',
  templateUrl: './apk.component.html',
  styleUrls: ['./apk.component.scss']
})
export class ApkComponent {
  sidebarWidth: number = 250; // Ancho inicial del Sidebar

  updateMainContentMargin(width: number) {
    this.sidebarWidth = width;
  }

}
