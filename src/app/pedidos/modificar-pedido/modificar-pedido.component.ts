import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.component.html',
  styleUrls: ['./modificar-pedido.component.scss']
})
export class ModificarPedidoComponent implements OnInit {


  ngOnInit(): void {
    
    window.location.href = 'https://logifruit.atlassian.net/servicedesk/customer/portals';
  }

}
