import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-carga-modelos',
  templateUrl: './form-carga-modelos.component.html',
  styleUrls: ['./form-carga-modelos.component.scss']
})
export class FormCargaModelosComponent implements OnInit {

  articuloSeleccionado!: number;
  unidadesSeleccionadas!: number;

  
  editMode: boolean = false;
  productosDisponibles:  any;
  //unidades = 0;
  formulario!: FormGroup;

  constructor(
    @Optional() public dialogRef: MatDialogRef<FormCargaModelosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    this.productosDisponibles = this.data.productosDisponibles;
    if(this.data.articuloSeleccionado){
      this.editMode = true;
      this.productosDisponibles = [this.data.articuloSeleccionado];
      //buscar en la array
      this.articuloSeleccionado = this.data.articuloSeleccionado.id;
      this.unidadesSeleccionadas = this.data.articuloSeleccionado.cantidad;
    }

    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  filtrarProductosDisponibles() {
    if(this.editMode){
      return this.productosDisponibles;
    }
    return this.productosDisponibles.filter((item:  any ) => item.cantidad === 0);
  }

  sonCamposValidos(): boolean {
    const cantidadValida = this.unidadesSeleccionadas != null && this.unidadesSeleccionadas >= 1;
    return this.articuloSeleccionado != null && cantidadValida;
  }

  guardarCambios() {
    // Buscar el objeto correspondiente al artículo seleccionado
    const objetoEncontrado = this.productosDisponibles.find((objeto: { id: number; }) => objeto.id == this.articuloSeleccionado);
    if (objetoEncontrado) {
      objetoEncontrado.cantidad = this.unidadesSeleccionadas;
    }
    this.dialogRef.close(this.productosDisponibles);    
  }
}
