import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm, Validators} from '@angular/forms';
import { Gate } from '../gate';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
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
openEditDialog(gat: Gate): void{
  const dialogRef = this.dialog.open(EditDialogComponent,{
    data: gat,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

openAddDialog(): void{
  const dialogRef = this.dialog.open(EditDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
/////////////////////////

@Component({
  selector: 'app-entrance-edit',
  templateUrl: 'entrance-edit.html',
  styleUrls: ['./dialog-css.scss'],
})
export class EditDialogComponent {
  constructor(private http: HttpClient,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public gate: Gate) {}
  formControl = new FormControl('', [
    Validators.required
  ]);
  confirmUpdate(){
    console.log(this.gate);
    this.http.post<any>('http://localhost:8080/entrance/' + '/entrance/update-entrance', this.gate)
    .subscribe(data => {
      console.log(data)
    });
  }
}
////////////////////////
@Component({
  selector: 'app-entrance-add',
  templateUrl: 'entrance-add.html',
  styleUrls: ['./dialog-css.scss'],
})
export class AddDialogComponent {
  constructor(private http: HttpClient) {}

  formControl = new FormControl('', [
    Validators.required
  ]);

  entrance = new Gate();
  roles: string = "";

  newGate(): void{
    let i = 0;
    let temp = 0;
    for (i; i < this.roles.length; i++){
      if ( parseInt(this.roles[i]) ) {
        this.entrance.roleId[temp] = Number(this.roles[i]);
        temp++;
      }
    }
    this.http.post('http://localhost:8080/entrance/'+'insert-entrance', this.entrance)
    .subscribe(data => {
      console.log(data)
    });
  }
}