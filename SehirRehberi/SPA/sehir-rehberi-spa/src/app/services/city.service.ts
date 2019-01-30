import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor( private httpClient:HttpClient) {
   
   }

   path="http://localhost:49521/api/";

   //City List
   getCities():Observable<City[]>{
     return this.httpClient.get<City[]>(this.path+"cities")
   }

   //Get City Info
   getCityById(cityId):Observable<City>{
     return this.httpClient.get<City>(this.path+"cities/Detail/?id="+cityId)
   }

   //Get City Photo Info
   getPhotosByCity(cityId):Observable<Photo>{
    return this.httpClient.get<Photo>(this.path+"cities/Photos/?id="+cityId)
  }
   
}
