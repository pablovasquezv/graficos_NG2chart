import { Component, OnInit, Inject } from '@angular/core';
//Cierre de Modal
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
//Modal 
import { ModalUsuarioComponent } from 'src/app/components/modals/modal-usuario/modal-usuario.component';
//controlador 
import { UsuariosService } from "src/app/service/usuarios.service";
//Formulario Activo
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-ingreso-usuarios',
  templateUrl: './formulario-ingreso-usuarios.component.html',
  styleUrls: ['./formulario-ingreso-usuarios.component.scss']
})
export class FormularioIngresoUsuariosComponent implements OnInit {

  //Validacion de carácteres de email
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-A\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      Rut_Usuario: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      Nombres_Usuario: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      Apellido_Paterno_Usuario: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      Apellido_Materno_Usuario: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      Fecha_Nacimiento_Usuario: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      Sexo_Usuario: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
      Email_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      Telefono_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      Direccion_Usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
    })
  }

  //Creamo la propiedad de control del formulario Usuarios
  formularioIngresoUsuarios: FormGroup;
  constructor(private usuariosService: UsuariosService,
    private dialogRef: MatDialogRef<ModalUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    //Creamos las instancia con del formulario
    this.formularioIngresoUsuarios = this.createFormGroup();
  }
  onSaveIngresoUsuarios() {
    console.log(this.formularioIngresoUsuarios);
    //new
    if (this.formularioIngresoUsuarios.valid) {
      this.usuariosService.addUsuarios(this.formularioIngresoUsuarios.value);
      alert("Guardado Correctamente!");
      //Limpiamos el Formulario
      this.onReserForm();
      this.close();

    } else {
      alert("Ingresar datos en todos los campos requeridos!!");
    }
  }

  //Limpieza de formulario
  onReserForm() {
    this.formularioIngresoUsuarios.reset();
  }
  //Cierre de Modal
  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  //Creamos los gett de formulario para que reconosca las propiedades.
  get Rut_Usuario() { return this.formularioIngresoUsuarios.get('Rut_Usuario'); }
  get Nombres_Usuario() { return this.formularioIngresoUsuarios.get('Nombres_Usuario'); }
  get Apellido_Paterno_Usuario() { return this.formularioIngresoUsuarios.get('Apellido_Paterno_Usuario'); }
  get Apellido_Materno_Usuario() { return this.formularioIngresoUsuarios.get('Apellido_Materno_Usuario'); }
  get Fecha_Nacimiento_Usuario() { return this.formularioIngresoUsuarios.get('Fecha_Nacimiento_Usuario'); }
  get Sexo_Usuario() { return this.formularioIngresoUsuarios.get('Sexo_Usuario'); }
  get Email_Usuario() { return this.formularioIngresoUsuarios.get('Email_Usuario'); }
  get Telefono_Usuario() { return this.formularioIngresoUsuarios.get('Telefono_Usuario'); }
  get Direccion_Usuario() { return this.formularioIngresoUsuarios.get('Direccion_Usuario'); }

}
