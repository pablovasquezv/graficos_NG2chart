import { Component, OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-ingreso-pais',
  templateUrl: './modal-ingreso-pais.component.html',
  styleUrls: ['./modal-ingreso-pais.component.scss']
})
export class ModalIngresoPaisComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalIngresoPaisComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
  }
  
  //Cierre de Modal
  close(): void {
    this.dialogRef.close();
  }

}
