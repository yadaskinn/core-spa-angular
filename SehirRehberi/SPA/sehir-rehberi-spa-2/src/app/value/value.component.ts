import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Value } from '../models/value';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  //
  constructor( private httpClient:HttpClient) { }

  //array oluşturduk.
  values:Value[]=[];
  
  ngOnInit() {
    //uygulama çalıştığı zaman çalışacak blok
    this.getValues().subscribe(data=>{
      this.values=data;
    });
  }

  //get values functionu
 getValues()
    {
      return this.httpClient.get<Value[]>("http://localhost:49521/api/values");
    }
}
