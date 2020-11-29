import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { NgForm} from '@angular/forms';
import { Gate } from '../Gate';
@Component({
  selector: 'app-gates-info',
  templateUrl: './gates-info.component.html',
  styleUrls: ['./gates-info.component.scss']
})
export class GatesInfoComponent implements OnInit {
  URL = 'http://localhost:8080/gates/';
  gate: Gate = new Gate();
  responce: any;
  constructor(private http: HttpClient) { }
  delete(id: number){
    alert("Вы уверенны, что хотите удалить gate c ID " + id+" ?");
  }
  post(gat: Gate){
    console.log()
    const body = {name: this.gate.name, description: this.gate.description};
    this.http.post<any>(this.URL+'hello3', body).subscribe(data => {
      console.log(data)
    })
  }
  show(){
    this.responce = this.http
    .get(this.URL+'hello2');
  }
  ngOnInit(): void {
    this.show();
  }
  onSubmit(myForm: NgForm){
     
    console.log(myForm);
}
}
