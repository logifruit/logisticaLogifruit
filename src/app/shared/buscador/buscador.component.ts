import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {
  @Output() seleccionado = new EventEmitter<string>();
  searchQuery: string = '';
  selectedField: string = '';  
  resultados!: any[];
  filteredResultados: any[] = [];
  lineaSeleccionada: number = -1;
  clienteSeleccionado: any;
  title!:string;
 
  constructor(private dialogRef: MatDialogRef<BuscadorComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.resultados = data.datos;
    this.filteredResultados = data.datos;
    this.title = data.title;
  }

  selectField(field: string): void {
    this.selectedField = field;
  }

  filtrarResultados() {
    this.filteredResultados = this.resultados.filter(objeto =>
      Object.values(objeto).some(valor =>
        (typeof valor === 'string' || typeof valor === 'number') && valor.toString().toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())
      )
    );
  }
  

  seleccionarLinea(index: number, seleccionado: any) {    
    this.lineaSeleccionada = index;
    this.clienteSeleccionado = seleccionado;
  }

  aceptarLinea(seleccionado: any) {   
    this.dialogRef.close(seleccionado);
  }

  emitirSeleccion(valor: string) {
    this.seleccionado.emit(valor);
  }

  obtenerEncabezados(): string[] {
    // Obtener las claves del primer objeto del array
    if (this.resultados.length > 0) {
      return Object.keys(this.resultados[0]);
    }
    return [];
  }

  obtenerDetalles(campo: any): string[] {
    // Obtener los valores del objeto
    return Object.values(campo);
  }

}
