import { Inject } from '@angular/core';
import { Component,  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gate } from '../gate';

@Component({
  selector: 'app-dialog-content-example-dialog-component',
  templateUrl: './dialog-content-example-dialog-component.component.html',
  styleUrls: ['./dialog-content-example-dialog-component.component.scss']
})
export class DialogContentExampleDialogComponentComponent {
  gate: Gate= new Gate();
  addGate(gat: Gate){
    console.log(gat.description);
  }
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialogComponentComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
