import { Component,OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-modal-insulina',
  templateUrl: './modal-insulina.component.html',
  styleUrls: ['./modal-insulina.component.scss']
})
export class ModalInsulinaComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalInsulinaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
