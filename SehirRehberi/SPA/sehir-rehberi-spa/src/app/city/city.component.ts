import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';
import { ServiceResultState } from '../models/serviceResultState';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService]//component kullanıldığı anda oluşacak instance
})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService, private alertify: AlertifyService) { }

  cities: City[]

  ngOnInit() {
    this.cityService.getCities().subscribe((data) => {

      if (data != null && data.state == ServiceResultState.SUCCESS) {
        return this.cities = data.resultList
      }
      else {
        return this.alertify.success(data.message);
      }

    })
  }

}
