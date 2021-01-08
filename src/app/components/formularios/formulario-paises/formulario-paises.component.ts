import { Component, OnInit, Inject, } from '@angular/core';
//Cierre de Modal
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
//Modal ingreso
import {ModalIngresoPaisComponent  } from '../../modals/modal-ingreso-pais/modal-ingreso-pais.component';
//Controlador
import { PaisesService } from "../../../service/paises.service";

//Formulario Activo
import { FormControl, FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-formulario-paises',
  templateUrl: './formulario-paises.component.html',
  styleUrls: ['./formulario-paises.component.scss']
})
export class FormularioPaisesComponent implements OnInit {

  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      ID_Pais: new FormControl(),
      Nombre_Pais: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    })
  }

  //Creamo la propiedad de control del formulario Usuarios
  formularioIngresoPaises: FormGroup;
  

  
  constructor(
    private paisesService: PaisesService,
    private dialogRef: MatDialogRef< ModalIngresoPaisComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    //Creamos las instancia con del formulario
    this.formularioIngresoPaises = this.createFormGroup();
  }


  ngOnInit() {
  }
  //Creacion método donde se resiven todos los parámetros del formulario y no devuelve nada
  onSavePais(){
    //new
    if (this.formularioIngresoPaises.valid) {
        this.paisesService.addPais(this.formularioIngresoPaises.value);
        alert("Guardado Correctamente!");
          //Limpiamos el Formulario
      this.onReserForm();
      //Cerramos el Modal
      this.close();
     } else {
       alert("Ingresar datos en todos los campos requeridos!!");
     }
  }

   //Limpieza de formulario
   onReserForm() {
    this.formularioIngresoPaises.reset();
    
  }
   //Cierre de Modal
   close(): void {
    this.dialogRef.close();
  }

  //Creamos los gett de formulario para que reconosca las propiedades.
  get ID_Pais() { return this.formularioIngresoPaises.get('ID_Pais'); }
  get Nombre_Pais() { return this.formularioIngresoPaises.get('Nombre_Pais'); }

}
