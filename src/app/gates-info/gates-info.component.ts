import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';
import { Gate } from '../gate';
import {MatDialog } from '@angular/material/dialog'
import { DialogContentExampleDialogComponentComponent } from '../dialog-content-example-dialog-component/dialog-content-example-dialog-component.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-gates-info',
  templateUrl: './gates-info.component.html',
  styleUrls: ['./gates-info.component.scss']
})

export class GatesInfoComponent implements OnInit {
  URL = 'http://localhost:8080/entrance/';
  gate: Gate = new Gate();
  responce: any;
  name: String | undefined;
  constructor(private http: HttpClient, private dialog: MatDialog) { }
  post(gat: Gate){
    console.log()
    const body = {name: this.gate.name, description: this.gate.description};
    this.http.post<any>(this.URL+'insert-entrance', body).subscribe(data => {
      console.log(data)
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponentComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  show(){
    this.responce = this.http
    .get(this.URL+'select-all');
  }
  ngOnInit(): void {
    this.show();
  }
  onSubmit(myForm: NgForm){
     
    console.log(myForm);
}
}
