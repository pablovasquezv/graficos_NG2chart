import { Component, OnInit, Inject, ViewChild, ElementRef,Input } from '@angular/core';
//Cierre de Modal
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
//Modal 
import { ModalInsulinaComponent} from 'src/app/components/modals/modal-insulina/modal-insulina.component';
//Formulario Activo
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
//controlador 
import { MedicionesService } from "../../../service/mediciones.service"; 
//Alertas
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario-ingreso-insulina',
  templateUrl: './formulario-ingreso-insulina.component.html',
  styleUrls: ['./formulario-ingreso-insulina.component.scss']
})
export class FormularioIngresoInsulinaComponent implements OnInit {

//Creamos un form group par validar las celdas del modal
createFormGroup() {
  return new FormGroup({
    id: new FormControl(),
    Nivel: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    Comida: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    AntesDespues: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    Fecha: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)])
  })
}
 //Creamos la propiedad de control del formulario Usuarios
 formIngresoMediciones: FormGroup;
  constructor(
    private medicionesService: MedicionesService,
    private dialogRef: MatDialogRef< ModalInsulinaComponent>,
    @Inject(MAT_DIALOG_DATA) data
   ) { 
    //Creamos las instancia con del formulario
    this.formIngresoMediciones = this.createFormGroup();
  }

  ngOnInit() {
  }

  onSaveIngresoMediciones() {
    
    //new
    if (this.formIngresoMediciones.valid) {
      this.medicionesService.addMedicionGlucosa(this.formIngresoMediciones.value);
      this.medicionesService.getAllMedicionGlucosa();
      Swal.fire(
        '¡Registro Guardo!',
        'El registro ha sido Guardado.',
        'success'
      )
      //Limpiamos el Formulario
      this.onReserForm();
      //Cerramos el Modal
      this.close();
    } else {
      //alert("Ingresar datos en todos los campos requeridos!!");
      Swal.fire(
        '¡Completar todos los campos del formulario!',
        'Todos los campos deben ser llenados .',
        'warning',
      )
    }
  }

  //Limpieza de formulario
  onReserForm() {
    this.formIngresoMediciones.reset();
    this.close();
  }
   //Cierre de Modal
   close(): void {
    this.dialogRef.close();
  }
 //Creamos los gett de formulario para que reconosca las propiedades.
 get id() { return this.formIngresoMediciones.get('id'); }
 get Nivel() { return this.formIngresoMediciones.get('Nivel'); }
 get Comida() { return this.formIngresoMediciones.get('Comida'); }
 get AntesDespues() { return this.formIngresoMediciones.get('AntesDespues'); }
 get Fecha() { return this.formIngresoMediciones.get('Fecha'); }
}
