import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isOpen: boolean = false;
  sidebarWidth: number = 250; // Ancho inicial del Sidebar
  @Output() sidebarWidthChanged = new EventEmitter<number>();

  menuOptions: { name: string, icon: string, description: string, url: string }[] = [
    { name: 'ModificarPedidos', icon: 'fa fa-home', description: 'Descripción de la opción 1' , url:'/apk/editPedidos' },
    { name: 'ModificarPedidos 2', icon: 'fa fa-user', description: 'Descripción de la opción 2', url:'/apk/editPedido' },
    { name: 'Opción 3', icon: 'fa fa-cog', description: 'Descripción de la opción 3' , url:'/apk' },
  ];


  constructor(private router: Router){}

  ngOnInit() {}

  toggleSidebar() {
    this.sidebarWidth = this.sidebarWidth === 250 ? 50 : 250;
    this.sidebarWidthChanged.emit(this.sidebarWidth); 
    this.isOpen = !this.isOpen;
  }
  
  navigateTo(url: string) {
    this.router.navigate([url]);
  }

}


