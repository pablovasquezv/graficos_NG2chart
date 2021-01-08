import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
//Models
import { PaisesInterface } from 'src/app/models/paises.Interface';
//Services
import { PaisesService } from 'src/app/service/paises.service';
//Modal ingreso
import { ModalIngresoPaisComponent } from '../../modals/modal-ingreso-pais/modal-ingreso-pais.component';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  displayedColumns: 
  string[] = ['Nombre_Pais', 'actions'];
  dataSource= new MatTableDataSource();
 
  public listUsuarios: PaisesInterface[] = [];

 
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(
    private paisesService: PaisesService,
    private matDialog: MatDialog
  ) {
  
  }

  ngOnInit() {
    
    this.getPaises();
    this.dataSource.paginator = this.paginator;
  }
   //Método que habre el Modal Ingreso
   openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Modal Ingreso Toma Insulina'
    };
    dialogConfig.autoFocus = true;
    this.matDialog.open( ModalIngresoPaisComponent, dialogConfig);
  }
  //Listamos todos las Mediciones de Glucosa
  getPaises() {
    this.paisesService.getAllPaises().subscribe(pais => {
      this.dataSource.data = pais;
    });
  }
  Guardar(){
    console.log('nuevo');
  }

  onEdit(element:PaisesInterface){
  
  }
  //Eliminar
  onDelete(ID_Pais: string) {
    const confirmacion = confirm("Estas Seguro de querer Eliminarlo?");
    if (confirmacion) {
      this.paisesService.deletePais(ID_Pais);
      alert("Eliminado Correctamente!");
    }
  }
  //Odernar campos Tabla
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
