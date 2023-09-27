import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormCargaModelosComponent } from './form-carga-modelos/form-carga-modelos.component';

@Component({
  selector: 'app-carga-modelos',
  templateUrl: './carga-modelos.component.html',
  styleUrls: ['./carga-modelos.component.scss']
})
export class CargaModelosComponent { // implements OnChanges  {
  mostrarModal = false;  
  totalUnidades: number = 0; // Variable para almacenar el total de unidades

 @Input() articulosDispo: any;
  
  constructor(public dialog: MatDialog) {}

  openDialog(item?: any): void {
    this.mostrarModal= true;
    let dialogRef = this.dialog.open(FormCargaModelosComponent, {      
      data: {productosDisponibles :this.articulosDispo, articuloSeleccionado: item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.calcularTotalUnidades();
        let objetoEncontrado = this.articulosDispo.find((objeto: any) => objeto.id == result.id);
        // Verificar si se encontró el objeto
        if (objetoEncontrado) {
          // Cambiar la cantidad del objeto encontrado
          objetoEncontrado.cantidad = result.cantidad;
          
        }
      }
    });
  }

  calcularTotalUnidades() {
    console.log("recalcular");
    
    this.totalUnidades = this.articulosDispo.reduce((total: any, item: { cantidad: any; }) => total + item.cantidad, 0);
  }

}