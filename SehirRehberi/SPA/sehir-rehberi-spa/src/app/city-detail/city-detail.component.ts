import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../services/city.service';
import { City } from '../models/city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private cityServices: CityService) { }

  //city modeli
  city: City;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"])
    })
  }
  
  getCityById(cityId) {
    //cityservices metodu kullandık.
    this.cityServices.getCityById(cityId).subscribe(data => {
      this.city = data;
    });
  }

}
