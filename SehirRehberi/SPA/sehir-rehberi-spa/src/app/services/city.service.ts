import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor( private httpClient:HttpClient) {
   
   }

   path="http://localhost:49521/api/";

   getCities():Observable<City[]>{
     return this.httpClient.get<City[]>(this.path+"cities")
   }
}
