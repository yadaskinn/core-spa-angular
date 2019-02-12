import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { City } from 'src/app/models/city';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers: [CityService]
})
export class CityAddComponent implements OnInit {

  constructor(private cityServices: CityService,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private router: Router,
    private authService: AuthService
  ) { }

  city: City;
  cityAddForm: FormGroup;

  //form oluşturduk, form builder ile
  createCityForm() {
    this.cityAddForm = this.formBuilder.group
      (

        {
          name: ["", Validators.required],
          description: ["", Validators.required]
        }
      )
  }

  add() {
    if (!this.authService.loggedIn()) {
      return this.alertifyService.error("Sisteme giriş yapınız.");
    }
    if (this.cityAddForm.valid) {
      //obje olarak value aldık. city set ettik.
      this.city = Object.assign({}, this.cityAddForm.value);
      this.city.userId = this.authService.getCurrentUserId();
      //Todo, kullanıcı sonradan alacağız.
      this.cityServices.add(this.city)
      // this.router.navigateByUrl('/citydetail/')
    }
  }

  ngOnInit() {
    this.createCityForm();
  }

}
