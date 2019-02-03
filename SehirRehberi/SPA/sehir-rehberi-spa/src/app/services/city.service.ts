import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { environment } from 'src/environments/environment';
// import {ApiConfig} from '../apiconfig';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService,
  ) {

  }

  // path = "http://localhost:49521/api/";

  path = environment.apiUrl;

  //City List
  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + "cities")
  }

  //Get City Info
  getCityById(cityId): Observable<City> {
    return this.httpClient.get<City>(this.path + "cities/Detail/?id=" + cityId)
  }

  //Get City Photo Info
  getPhotosByCity(cityId): Observable<Photo> {
    return this.httpClient.get<Photo>(this.path + "cities/Photos/?id=" + cityId)
  }

  //Add City
  add(city) {
    return this.httpClient.post(this.path + "cities/Add", city).subscribe(data => {
      debugger;
      this.alertifyService.success("Şehir Eklendi");
      return this.router.navigateByUrl('/citydetail/' + data["id"])
    });
  }


}


