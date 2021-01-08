import { Component, OnInit, Inject, ViewChild, ElementRef, Input } from '@angular/core';
//Cierre de Modal
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
//Modal 
import { ModalUsuarioComponent } from 'src/app/components/modals/modal-usuario/modal-usuario.component';
//Formulario Activo
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
//controlador 
import { UsuariosService } from "src/app/service/usuarios.service";
//Modelos
import { UsuariosInterface } from 'src/app/models/usuarios.interface';

@Component({
  selector: 'app-formulario-editar-usuarios',
  templateUrl: './formulario-editar-usuarios.component.html',
  styleUrls: ['./formulario-editar-usuarios.component.scss']
})
export class FormularioEditarUsuariosComponent implements OnInit {
  @Input() usuariosInterface: UsuariosInterface;
  //Validacion de carácteres de email
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-A\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Creamos un form group par validar las celdas del modal
  createFormGroup() {
    return new FormGroup({
      ID_Usuario: new FormControl('', [Validators.required]),
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
  ngOnInit() {
    this.initValuesForm();
  }

  private initValuesForm(): void {
    this.formularioIngresoUsuarios.patchValue({
      ID_Usuario: this.usuariosInterface.ID_Usuario,
      Rut_Usuario: this.usuariosInterface.Rut_Usuario,
      Nombres_Usuario: this.usuariosInterface.Nombres_Usuario,
      Apellido_Paterno_Usuario: this.usuariosInterface.Apellido_Paterno_Usuario,
      Apellido_Materno_Usuario: this.usuariosInterface.Apellido_Materno_Usuario,
      Fecha_Nacimiento_Usuario: this.usuariosInterface.Fecha_Nacimiento_Usuario,
      Sexo_Usuario: this.usuariosInterface.Sexo_Usuario,
      Direccion_Usuario: this.usuariosInterface.Direccion_Usuario,
      Email_Usuario: this.usuariosInterface.Email_Usuario,
      Telefono_Usuario: this.usuariosInterface.Telefono_Usuario
    });
  }

  onSaveEditUsuarios() {
    console.log(this.formularioIngresoUsuarios);
    //new
    if (this.formularioIngresoUsuarios.valid) {
      this.usuariosService.updateUsuarios(this.formularioIngresoUsuarios.value);
      alert("Actualizado Correctamente!");
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

  //Creamos los gett de formulario para que reconosca las propiedades.
  get ID_Usuario() { return this.formularioIngresoUsuarios.get('ID_Usuario'); }
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
