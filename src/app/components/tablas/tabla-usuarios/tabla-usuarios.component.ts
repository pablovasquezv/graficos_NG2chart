import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,  MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
//Mode
import { UsuariosInterface } from 'src/app/models/usuarios.interface';
//Ser
import { UsuariosService } from 'src/app/service/usuarios.service';
//Modal ingreso
import { ModalUsuarioComponent } from 'src/app/components/modals/modal-usuario/modal-usuario.component';
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {

  displayedColumns:
  string[] = [
    
    'Rut_Usuario',
    'Nombres_Usuario',
    'Apellido_Paterno_Usuario',
    'Apellido_Materno_Usuario',
    'Fecha_Nacimiento_Usuario',
    'Sexo_Usuario',
    'Direccion_Usuario',
    'Email_Usuario',
    'Telefono_Usuario',
    'actions'];
dataSource = new MatTableDataSource();

public listUsuarios: UsuariosInterface[] = [];

@ViewChild(MatSort, { static: true }) sort: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

constructor(
  private usuariosService: UsuariosService, 
  private matDialog: MatDialog
) { }

ngOnInit() {
  this.getListUsuarios();
  //Pag
  this.dataSource.paginator = this.paginator;
}

getListUsuarios() {
  this.usuariosService.getAllUsuarios().subscribe(usuarios =>
    this.dataSource.data = usuarios
  );
}

//Odernar campos Tabla
ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}
onEdit(usuariosInterface: UsuariosInterface) {
  //console.log('Edit Usuarios', usuariosInterface);
  this.openDialog(usuariosInterface);
}
openModal(): void {
  this.openDialog();
}

openDialog(usuariosInterface?: UsuariosInterface): void {
  const config = {
    data: {
      message: usuariosInterface ? 'Editar Usuario' : 'Nuevo Usuario',
      content: usuariosInterface
    }
  };
  const dialogRef = this.matDialog.open(ModalUsuarioComponent, config);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result ${result}`);
  });
}
//Eliminar
onDelete(ID_Usuario: string) {
  const confirmacion = confirm("Estas Seguro de querer Eliminarlo?");
  if (confirmacion) {
    this.usuariosService.deleteUsuario(ID_Usuario);
    alert("Eliminado Correctamente!");
  }
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}



}
