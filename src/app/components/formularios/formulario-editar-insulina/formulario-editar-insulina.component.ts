import { Component, OnInit, Inject,ViewChild, ElementRef,Input } from '@angular/core';
//Cierre de Modal
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
//Modal 
import { ModalInsulinaComponent} from 'src/app/components/modals/modal-insulina/modal-insulina.component';
//Formulario Activo
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
//controlador 
import { MedicionesService } from "../../../service/mediciones.service"; 
//Modelos
import{MedicionGlucosaInterface}from'src/app/models/MedicionGlucosa.Interface';
@Component({
  selector: 'app-formulario-editar-insulina',
  templateUrl: './formulario-editar-insulina.component.html',
  styleUrls: ['./formulario-editar-insulina.component.scss']
})
export class FormularioEditarInsulinaComponent implements OnInit {

  @Input() medicionGlucosaInterface: MedicionGlucosaInterface;

  //Creamos un form group par validar las celdas del modal
createFormGroup() {
  return new FormGroup({
    Id_MedicionGlucosa: new FormControl(),
    Nivel: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    Comida: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    AntesDespues: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    Fecha: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)])
  })
}
 //Creamos la propiedad de control del formulario Usuarios
 formularioEditarMediciones: FormGroup;
  constructor(
    private medicionesService: MedicionesService,
    private dialogRef: MatDialogRef<ModalInsulinaComponent>,
    @Inject(MAT_DIALOG_DATA) data
   ) { 
    //Creamos las instancia con del formulario
    this.formularioEditarMediciones = this.createFormGroup();
  }

  ngOnInit() {
    this.initValuesForm();
  }
  private initValuesForm(): void {
    this.formularioEditarMediciones .patchValue({
      Id_MedicionGlucosa: this.medicionGlucosaInterface.Id_MedicionGlucosa,
      Nivel: this.medicionGlucosaInterface.Nivel,
      Comida: this.medicionGlucosaInterface.Comida,
      AntesDespues:this.medicionGlucosaInterface.AntesDespues,
      Fecha:this.medicionGlucosaInterface.Fecha

      
    });
  }

  onSaveIngresoMediciones() {
    //new
    if (this.formularioEditarMediciones.valid) {
      this.medicionesService.updateMedicionGlucosa(this.formularioEditarMediciones.value);
      alert("Actualizado Correctamente!");
      //Limpiamos el Formulario
      this.onReserForm();
      this.close();
    } else{
      alert("Ingresar datos en todos los campos requeridos!!");
    }
  }

  //Limpieza de formulario
  onReserForm() {
    this.formularioEditarMediciones.reset();
    this.close();
  }
   //Cierre de Modal
   close(): void {
    this.dialogRef.close();
  }
  
 //Creamos los gett de formulario para que reconosca las propiedades.
 get Id_MedicionGlucosa() { return this.formularioEditarMediciones.get('Id_MedicionGlucosa'); }
 get Nivel() { return this.formularioEditarMediciones.get('Nivel'); }
 get Comida() { return this.formularioEditarMediciones.get('Comida'); }
 get AntesDespues() { return this.formularioEditarMediciones.get('AntesDespues'); }
 get Fecha() { return this.formularioEditarMediciones.get('Fecha'); }
}
