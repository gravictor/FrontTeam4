import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gate } from '../gate';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-content-example-dialog-component',
  templateUrl: './dialog-content-example-dialog-component.component.html',
  styleUrls: ['./dialog-content-example-dialog-component.component.scss']
})
export class DialogContentExampleDialogComponentComponent {
  gate: Gate= new Gate();
  URL = 'http://localhost:8080/entrance/';
  formControl = new FormControl('', [
    Validators.required
  ]);
  addGate(gat: Gate){
    console.log(gat)
    gat.roleId.push(6);
    this.http.post<any>(this.URL + 'insert-entrance', gat).subscribe(data => {
      console.log(data);
    });
  }
  constructor(private http: HttpClient, 
    public dialogRef: MatDialogRef<DialogContentExampleDialogComponentComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
