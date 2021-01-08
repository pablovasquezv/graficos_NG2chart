import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
//Models
import { MedicionGlucosaInterface } from 'src/app/models/MedicionGlucosa.Interface';
//Services
import { MedicionesService } from 'src/app/service/mediciones.service';
import { ExcelExportService } from 'src/app/service/excel-export.service';
import { ActivatedRoute, Router } from '@angular/router';
//Formato a Fechas
import { formatDate } from '@angular/common';
//Modal ingreso
import { ModalInsulinaComponent } from 'src/app/components/modals/modal-insulina/modal-insulina.component';
//Alertas
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tabla-insulina',
  templateUrl: './tabla-insulina.component.html',
  styleUrls: ['./tabla-insulina.component.scss']
})
export class TablaInsulinaComponent implements OnInit {

  //Captura las celdas 
  @Input() medicionGlucosaInterface: MedicionGlucosaInterface;
  public paginatorSize: number = 10;

  displayedColumns:
    string[] = ['Fecha', 'Nivel', 'Comida', 'AntesDespues', 'actions'];

  dataSource: MatTableDataSource<MedicionGlucosaInterface>;
  listmedicionGlucosaInterface: MedicionGlucosaInterface[];


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private medicionesService: MedicionesService,
    private excelProjectLog: ExcelExportService,
    private route: ActivatedRoute,
    private matDialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    if (localStorage.getItem("pt_changes_pageSize") != null)
      this.paginatorSize = parseInt(localStorage.getItem("pt_changes_pageSize"));
    this.loadChanges();
  }

  reload() {
    this.loadChanges();
  }

  loadChanges() {
    console.log("LoadChanges");
    this.medicionesService.getAllMedicionGlucosa().subscribe(
      (response) => {
        this.listmedicionGlucosaInterface = response;
        if (this.listmedicionGlucosaInterface != null)
          this.loadPaginator(this.listmedicionGlucosaInterface);
      }, (error) => {
        console.log(error);
      }
    );
  }

  handlePaginatorEvent(event: any) {
    this.paginatorSize = event.pageSize;
    localStorage.setItem("pt_changes_pageSize", this.paginatorSize + "");
  }

  loadPaginator(data: Array<MedicionGlucosaInterface>) {
    console.log("loadPaginator");
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página.'
    /*this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'alarm': return item.alarm.level;
        default: return item[property];
      }
    };*/

  }
  onEdit(medicionGlucosaInterface: MedicionGlucosaInterface) {
    //console.log('Edit Medición', medicionGlucosaInterface);
    this.openDialog(medicionGlucosaInterface);
  }

  openModal(): void {
    this.openDialog();
  }

  openDialog(medicionGlucosaInterface?: MedicionGlucosaInterface): void {
    const config = {
      data: {
        message: medicionGlucosaInterface ? 'Editar Medición' : 'Nueva Medición',
        content: medicionGlucosaInterface
      }
    };
    const dialogRef = this.matDialog.open(ModalInsulinaComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }


  //Eliminar
  onDelete(Id_MedicionGlucosa: string) {
    Swal.fire({
      title: '¿Está seguro de eliminar el registro?',
      text: "¡No podrá revertir este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar registro!'
    }).then((result) => {
      if (result.value) {
        this.medicionesService.deleteMedicionGlucosa(Id_MedicionGlucosa);
        Swal.fire(
          '¡Registro borrado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })
  }

  //Filtra los datos de las tablas
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Método que exporta a excel
  exportAsXLSX() {
    let dataExport: any[] = [];
    this.listmedicionGlucosaInterface.forEach(ptItem => {
      dataExport.push(this.createCellExport(ptItem));
    });
    this.excelProjectLog.exportAsExcelFile(dataExport, 'Medicion');
  }

  //Método que exporta a Excel
  createCellExport(ptItem: MedicionGlucosaInterface) {
    return {
      'Nivel': ptItem.Nivel,
      'Comida': ptItem.Comida,
      'AntesDespues': ptItem.AntesDespues,
      'Fecha': formatDate(ptItem.Fecha, 'd-MMM-yyyy h:mm:ss a', 'en_US'),
      //'Fecha': formatDate(ptItem.Fecha, 'dd/MM/yyyy', 'en_US'),

    };
  }

}
