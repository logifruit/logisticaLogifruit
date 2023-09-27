import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CentrosService } from 'src/app/services/centros/centros.service';
import { PedidosService } from 'src/app/services/pedidos/pedidos.service';
import { PlataformasService } from 'src/app/services/plataformas/plataformas.service';
import { TransportesService } from 'src/app/services/transportes/transportes.service';
import { BuscadorComponent } from 'src/app/shared/buscador/buscador.component';

import * as microsoftTeams from "@microsoft/teams-js"; // Importar la librería de Microsoft Teams
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { ArticulosService } from 'src/app/services/articulos/articulos.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  pedidoId!: string;
  fechaCarga!: string;
  fechaDescarga!: string;
  cliente: any = {id:0, nombre:''};
  centroCliente!: string;
  zonaInfluencia!: string;
  puntoOperacional!: string;
  plataforma!: string;
  clave!: string;
  observaciones!: string;
  observacionesCarga!: string;
  horaCarga!: string;
  informado!: string;
  replica!: string;
  tipoTransporte!: string;
  servicioTienda!: string;
  agencia!: string;
  referenciaCliente!: string;
  camionFlota!: string;
  motivoSel!: string;
  destinatario!: string;
  direccionControl!: string;

  plataformas: any[] = []
  centroClientes: any[] = []
  tipoTransportes: any[] = []
  motivos: any[] = []
  clienteId = 0;
  user= 'nada'
  articulosDispo: any = []
  
  resultados: any[] = [];//[ {id:1, nombre:'Campo 1'},{id:2, nombre:'Campo 2'},{id:3, nombre:'Campo 3'}]; 

  constructor(public dialog: MatDialog, 
    public pedidoService: PedidosService,
    private transporteService: TransportesService,
    private centroService: CentrosService,
    private plataformaService: PlataformasService, 
    private clienteService: ClientesService, 
    private articulosService: ArticulosService) {}

  ngOnInit(): void {
    this.cargarMotivos("P1748850");
    this.cargarTransportes();
    this.cargarPlataformas(); 
    this.cargarClientes()  
  }

  cargarClientes(){
    this.clienteService.getClientes().subscribe(value=>{
      this.resultados = value;
    })
  }




  buscarPedido() {
    // Lógica para buscar el pedido y rellenar los campos si existe
    // Aquí puedes usar el pedidoId para hacer una llamada a la API o acceder a la base de datos
    // y obtener los datos del pedido correspondiente. Luego, asigna los datos a las propiedades
    // correspondientes para que se reflejen en los campos del formulario.    
  }

  buscarCliente(){
      const dialogRef = this.dialog.open(BuscadorComponent, {
        data: { datos: this.resultados,
                title: "Busqueda de Clientes" }
      });
  
      dialogRef.afterClosed().subscribe((selectedValue: any) => {
        if (selectedValue) {
          this.cliente = selectedValue
        };
        this.cargarDatosCliente();
      });
  }


  cargarDatosCliente(){
    this.cargarCentros();
    this.cargarArticulosDisponibles();
  }

  cargarArticulosDisponibles(){
    this.articulosService.getArticulosCliente(this.cliente.id)
      .pipe(
        map((data: any[]) => {
          // Usamos el operador 'map' para establecer 'cantidad' en 0 para todos los registros
          return data.map(item => ({ ...item, cantidad: 0 }));
        })
      )
      .subscribe(value => {
        // Almacenamos los datos en la variable 'articulos'
        console.log("ADis", value);
        
        this.articulosDispo = value;
      });
  }

  cargarCentros(){
    this.centroService.getCentroOperador(this.cliente.id).subscribe(value=>{
      this.centroClientes = value;   
      if (this.centroClientes.length > 0) {
        this.centroCliente = this.centroClientes[0].clave_Centro; // Establece el primer elemento como seleccionado.
      }
    })
  }
  cargarPlataformas(){
    this.plataformaService.getAllPlataformas().subscribe(value=>{
      this.plataformas = value;
    })
  }
  

  cargarMotivos(pedido:string){
    this.pedidoService.getMotivosOperaciones(pedido).subscribe(value =>{
      this.motivos = value;
    });
  }

  cargarTransportes(){
    this.transporteService.getAllTransports().subscribe(value => {
      this.tipoTransportes = value
    })
  }

  limpiarCampos() {
    this.pedidoId = '';
    this.fechaCarga = '';
    this.fechaDescarga = '';
    this.cliente.id = 0;
    this.cliente.nombre = '';
    this.centroCliente = '';
    this.zonaInfluencia = '';
    this.puntoOperacional = '';
    this.plataforma = '';
    this.clave = '';
    this.observaciones = '';
    this.observacionesCarga = '';
    this.horaCarga = '';
    this.informado = '';
    this.replica = '';
    this.tipoTransporte = '';
    this.servicioTienda = '';
    this.agencia = '';
    this.referenciaCliente = '';
    this.camionFlota = '';
    this.motivoSel = '';
    this.motivos = [];
    this.destinatario = '';
    this.direccionControl = '';
  }
}
