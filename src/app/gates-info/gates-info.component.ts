import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-gates-info',
  templateUrl: './gates-info.component.html',
  styleUrls: ['./gates-info.component.scss']
})
export class GatesInfoComponent implements OnInit {

  responce: any;
  constructor(private http: HttpClient) { }
  id= 1;
  gate = "gate 111";
  description = "last end";
   
  submit(form: NgForm){
      console.log(form);
  }
  show(){
    this.responce = this.http
    .get('http://localhost:8080/gates/hello2');
  }
  ngOnInit(): void {
    this.show();
  }
  onSubmit(myForm: NgForm){
     
    console.log(myForm);
}
}
