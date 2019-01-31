import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../services/city.service';
import { City } from '../models/city';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Photo } from '../models/photo';

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

  photos: Photo[] = [];

  //ngx gallery
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];



  ngOnInit() {
    debugger;
    this.activatedRoute.params.subscribe(params => {
      debugger;
      this.getCityById(params["cityId"])
    })
  }

  getCityById(cityId) {
    //cityservices metodu kullandık.
    this.cityServices.getCityById(cityId).subscribe(data => {
      this.city = data;
      this.getPhotosByCity(cityId)
    });
  }

  //şehrin fotoğraflarını çekme.
  getPhotosByCity(cityId) {
    this.cityServices.getPhotosByCity(cityId).subscribe(data => {
      this.photos.push(data);
      this.setGallery();
    })
  }

  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.city.photos.length; i++) {
      imageUrls.push({
        small: this.city.photos[i].url,
        medium: this.city.photos[i].url,
        big: this.city.photos[i].url,
      })
    }
    return imageUrls;
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.getImages();
  }


}
