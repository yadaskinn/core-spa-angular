(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n <!-- <app-city></app-city> -->\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sehir-rehberi-spa';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route */ "./src/app/route.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _value_value_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./value/value.component */ "./src/app/value/value.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./city-detail/city-detail.component */ "./src/app/city-detail/city-detail.component.ts");
/* harmony import */ var _city_city_add_city_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./city/city-add/city-add.component */ "./src/app/city/city-add/city-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");







// import {ApiConfig} from './apiconfig';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _value_value_component__WEBPACK_IMPORTED_MODULE_8__["ValueComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_10__["CityComponent"],
                _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_11__["CityDetailComponent"],
                _city_city_add_city_add_component__WEBPACK_IMPORTED_MODULE_12__["CityAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_route__WEBPACK_IMPORTED_MODULE_5__["appRoutes"]),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            ],
            providers: [_services_alertify_service__WEBPACK_IMPORTED_MODULE_14__["AlertifyService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/city-detail/city-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/city-detail/city-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpdHktZGV0YWlsL2NpdHktZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/city-detail/city-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/city-detail/city-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2 class=\"mt-3 pt-3\">Fotoğraflar</h2>\n      <!-- ngx galery  -->\n      <ngx-gallery *ngIf=\"galleryImages\"  [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n\n    </div>\n    <div  *ngIf=\"city\" class=\"col-md-6\">\n      <h2 class=\"mt-3 pt-3\">Notlarım</h2>\n      {{city.description}}\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/city-detail/city-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/city-detail/city-detail.component.ts ***!
  \******************************************************/
/*! exports provided: CityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailComponent", function() { return CityDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);





var CityDetailComponent = /** @class */ (function () {
    function CityDetailComponent(activatedRoute, cityServices) {
        this.activatedRoute = activatedRoute;
        this.cityServices = cityServices;
        this.photos = [];
    }
    CityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.getCityById(params["cityId"]);
        });
    };
    CityDetailComponent.prototype.getCityById = function (cityId) {
        var _this = this;
        //cityservices metodu kullandık.
        this.cityServices.getCityById(cityId).subscribe(function (data) {
            _this.city = data;
            _this.getPhotosByCity(cityId);
        });
    };
    //şehrin fotoğraflarını çekme.
    CityDetailComponent.prototype.getPhotosByCity = function (cityId) {
        var _this = this;
        this.cityServices.getPhotosByCity(cityId).subscribe(function (data) {
            _this.photos.push(data);
            _this.setGallery();
        });
    };
    CityDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.city.photos.length; i++) {
            imageUrls.push({
                small: this.city.photos[i].url,
                medium: this.city.photos[i].url,
                big: this.city.photos[i].url,
            });
        }
        return imageUrls;
    };
    CityDetailComponent.prototype.setGallery = function () {
        this.galleryOptions = [
            {
                width: '100%',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide
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
    };
    CityDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-detail',
            template: __webpack_require__(/*! ./city-detail.component.html */ "./src/app/city-detail/city-detail.component.html"),
            providers: [_services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"]],
            styles: [__webpack_require__(/*! ./city-detail.component.css */ "./src/app/city-detail/city-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"]])
    ], CityDetailComponent);
    return CityDetailComponent;
}());



/***/ }),

/***/ "./src/app/city/city-add/city-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/city/city-add/city-add.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-cityadd {\r\n  width: 100%;\r\n  max-width: 660px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-cityadd .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-cityadd .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-cityadd .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-cityadd input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-cityadd input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.help-block{\r\n  color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS9jaXR5LWFkZC9jaXR5LWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUVFLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jaXR5L2NpdHktYWRkL2NpdHktYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5mb3JtLWNpdHlhZGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjYwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZvcm0tY2l0eWFkZCAuY2hlY2tib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmZvcm0tY2l0eWFkZCAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tY2l0eWFkZCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLWNpdHlhZGQgaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLmZvcm0tY2l0eWFkZCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4uaGVscC1ibG9ja3tcclxuICBjb2xvcjpyZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/city/city-add/city-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/city/city-add/city-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- formgroupadd, gideceği metot -->\n      <form [formGroup]=\"cityAddForm\" (ngSubmit)=\"add()\" class=\"form-cityadd\">\n        <h2 class=\"mt-3 pt-3\">Yeni bir şehir ekle</h2>\n        <div class=\"form-group\">\n          <!-- name=>formControlName -->\n          <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\" placeholder=\"Şehir adı\" autofocus>\n          <!-- hata mesajı ngIf ile kontrol ediliyor -->\n          <span class=\"help-block\" *ngIf=\"cityAddForm.get('name').hasError('required') && cityAddForm.get('name').touched\">\n            Şehir adı zorunludur\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <!-- <app-ngx-editor class=\"form-control\" id=\"description\" name=\"description\" [placeholder]=\"'Buraya notlarınızı giriniz'\"\n            formControlName=\"description\" [spellcheck]=\"true\">\n          </app-ngx-editor> -->\n          <input class=\"form-control\" id=\"description\" name=\"description\" [placeholder]=\"'Buraya notlarınızı giriniz'\"\n          formControlName=\"description\" [spellcheck]=\"true\"/>\n        \n          <span class=\"help-block\" *ngIf=\"cityAddForm.get('description').hasError('required') && cityAddForm.get('description').touched\">\n            Not girmeniz zorunludur\n          </span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!cityAddForm.valid\">Ekle</button>\n        <h6>{{cityAddForm.value|json}}</h6>\n        <h6>{{cityAddForm.status|json}}</h6>\n      </form>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/city/city-add/city-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/city/city-add/city-add.component.ts ***!
  \*****************************************************/
/*! exports provided: CityAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityAddComponent", function() { return CityAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CityAddComponent = /** @class */ (function () {
    function CityAddComponent(cityServices, formBuilder, alertifyService, router) {
        this.cityServices = cityServices;
        this.formBuilder = formBuilder;
        this.alertifyService = alertifyService;
        this.router = router;
    }
    //form oluşturduk, form builder ile
    CityAddComponent.prototype.createCityForm = function () {
        this.cityAddForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    CityAddComponent.prototype.add = function () {
        if (this.cityAddForm.valid) {
            //obje olarak value aldık. city set ettik.
            this.city = Object.assign({}, this.cityAddForm.value);
            this.city.userId = 1; //Todo, kullanıcı sonradan alacağız.
            this.cityServices.add(this.city);
            // this.router.navigateByUrl('/citydetail/')
        }
    };
    CityAddComponent.prototype.ngOnInit = function () {
        this.createCityForm();
    };
    CityAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-add',
            template: __webpack_require__(/*! ./city-add.component.html */ "./src/app/city/city-add/city-add.component.html"),
            providers: [src_app_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"]],
            styles: [__webpack_require__(/*! ./city-add.component.css */ "./src/app/city/city-add/city-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CityAddComponent);
    return CityAddComponent;
}());



/***/ }),

/***/ "./src/app/city/city.component.css":
/*!*****************************************!*\
  !*** ./src/app/city/city.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpdHkvY2l0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/city/city.component.html":
/*!******************************************!*\
  !*** ./src/app/city/city.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <!-- *ngFor ile for yaptık. -->\n    <div *ngFor=\"let city of cities\" class=\"col-md-4\">\n      <h2 class=\"mt-3 pt-3\" >{{city.name}}</h2>\n      <div class=\"card mb-4 shadow-sm\">\n          <img class=\"card-img-top\" src=\"{{city.photoUrl}}\" style=\"height: 300px; width: 100d;\" >\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{city.description}}</p>\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <div class=\"btn-group\">\n              <button type=\"button\" routerLink=\"/citydetail/{{city.id}}\" class=\"btn btn-sm btn-outline-secondary\">Detay</button>\n              <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Edit</button>\n            </div>\n            <small class=\"text-muted\">9 mins</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/city/city.component.ts":
/*!****************************************!*\
  !*** ./src/app/city/city.component.ts ***!
  \****************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");



var CityComponent = /** @class */ (function () {
    function CityComponent(cityService) {
        this.cityService = cityService;
    }
    CityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityService.getCities().subscribe(function (data) {
            _this.cities = data;
        });
    };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/city/city.component.html"),
            providers: [_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"]] //component kullanıldığı anda oluşacak instance
            ,
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/city/city.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/models/loginUser.ts":
/*!*************************************!*\
  !*** ./src/app/models/loginUser.ts ***!
  \*************************************/
/*! exports provided: LoginUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
var LoginUser = /** @class */ (function () {
    function LoginUser() {
    }
    return LoginUser;
}());



/***/ }),

/***/ "./src/app/models/registerUser.ts":
/*!****************************************!*\
  !*** ./src/app/models/registerUser.ts ***!
  \****************************************/
/*! exports provided: RegisterUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUser", function() { return RegisterUser; });
var RegisterUser = /** @class */ (function () {
    function RegisterUser() {
    }
    return RegisterUser;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"city\" routerLinkActive=\"active\" >City <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"cityadd\" routerLinkActive=\"active\" >Şehir Ekle</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"value\" routerLinkActive=\"active\" >Value</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n    </ul>\n    <!-- form oluşturma -->\n    <form *ngIf=\"!isAuthenticated\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\" class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"User Name\" name=\"userName\" [(ngModel)]=\"loginUser.userName\" required>\n      <input class=\"form-control mr-sm-2\" type=\"password\" placeholder=\"Password\" name=\"password\"  [(ngModel)]=\"loginUser.password\" required>\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.loginUser = {};
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    //login giriş işlemi
    NavComponent.prototype.login = function () {
        this.authService.login(this.loginUser);
    };
    //logout
    NavComponent.prototype.logout = function () {
        this.authService.logOut();
    };
    Object.defineProperty(NavComponent.prototype, "isAuthenticated", {
        get: function () {
            return this.authService.loggedIn();
        },
        enumerable: true,
        configurable: true
    });
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/route.ts":
/*!**************************!*\
  !*** ./src/app/route.ts ***!
  \**************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-detail/city-detail.component */ "./src/app/city-detail/city-detail.component.ts");
/* harmony import */ var _city_city_add_city_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city/city-add/city-add.component */ "./src/app/city/city-add/city-add.component.ts");



//routing 
var appRoutes = [
    { path: "city", component: _city_city_component__WEBPACK_IMPORTED_MODULE_0__["CityComponent"] },
    { path: "citydetail/:cityId", component: _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_1__["CityDetailComponent"] },
    { path: "cityadd", component: _city_city_add_city_add_component__WEBPACK_IMPORTED_MODULE_2__["CityAddComponent"] },
    { path: "**", redirectTo: "city", pathMatch: "full" },
];


/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_loginUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/loginUser */ "./src/app/models/loginUser.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _models_registerUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/registerUser */ "./src/app/models/registerUser.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router, alertify) {
        this.httpClient = httpClient;
        this.router = router;
        this.alertify = alertify;
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + "auth/";
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelper"]();
        this.TOKEN_KEY = "token";
    }
    //kullanıcı giriş
    AuthService.prototype.login = function (loginUser) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        this.httpClient.post(this.path + "Login", _models_loginUser__WEBPACK_IMPORTED_MODULE_2__["LoginUser"], { headers: headers }).subscribe(function (data) {
            debugger;
            _this.saveToken(data);
            _this.userToken(data);
            _this.decodedToken = _this.jwtHelper.decodeToken(data.toString());
            _this.alertify.success("Sisteme giriş yapıldı.");
            return _this.router.navigateByUrl('/city');
        });
    };
    //kullanıcı kayıt.
    AuthService.prototype.register = function (registerUser) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        this.httpClient.post(this.path + "Register", _models_registerUser__WEBPACK_IMPORTED_MODULE_7__["RegisterUser"], { headers: headers }).subscribe(function (data) {
            // debugger;
            // this.saveToken(data['tokenString']);
            // this.userToken(data['tokenString']);
            // this.decodedToken = this.jwtHelper.decodeToken(data['tokenString']);
            // this.alertify.success("Sisteme giriş yapıldı.");
            // return this.router.navigateByUrl('/city');
        });
    };
    //kullanıcı logout
    AuthService.prototype.logOut = function () {
        localStorage.removeItem(this.TOKEN_KEY);
    };
    //kullanıcı sistemde aktif mi
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["tokenNotExpired"])(this.TOKEN_KEY);
    };
    //mevcut kullanıcı 
    AuthService.prototype.getCurrentUserId = function () {
        return this.jwtHelper.decodeToken(this.Token).nameid;
    };
    //token local storage kaydediyoruz.
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    };
    Object.defineProperty(AuthService.prototype, "Token", {
        //token
        get: function () {
            return localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/city.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/city.service.ts ***!
  \******************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






// import {ApiConfig} from '../apiconfig';
var CityService = /** @class */ (function () {
    function CityService(httpClient, router, alertifyService) {
        this.httpClient = httpClient;
        this.router = router;
        this.alertifyService = alertifyService;
        // path = "http://localhost:49521/api/";
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    //City List
    CityService.prototype.getCities = function () {
        return this.httpClient.get(this.path + "cities");
    };
    //Get City Info
    CityService.prototype.getCityById = function (cityId) {
        return this.httpClient.get(this.path + "cities/Detail/?id=" + cityId);
    };
    //Get City Photo Info
    CityService.prototype.getPhotosByCity = function (cityId) {
        return this.httpClient.get(this.path + "cities/Photos/?id=" + cityId);
    };
    //Add City
    CityService.prototype.add = function (city) {
        var _this = this;
        return this.httpClient.post(this.path + "cities/Add", city).subscribe(function (data) {
            debugger;
            _this.alertifyService.success("Şehir Eklendi");
            return _this.router.navigateByUrl('/citydetail/' + data["id"]);
        });
    };
    CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/value/value.component.css":
/*!*******************************************!*\
  !*** ./src/app/value/value.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVlL3ZhbHVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/value/value.component.html":
/*!********************************************!*\
  !*** ./src/app/value/value.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr *ngFor=\"let value of values\">\n    <td>{{value.id}}</td>\n    <td>{{value.name}}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/value/value.component.ts":
/*!******************************************!*\
  !*** ./src/app/value/value.component.ts ***!
  \******************************************/
/*! exports provided: ValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return ValueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ValueComponent = /** @class */ (function () {
    //
    function ValueComponent(httpClient) {
        this.httpClient = httpClient;
        //array oluşturduk.
        this.values = [];
    }
    ValueComponent.prototype.ngOnInit = function () {
        var _this = this;
        //uygulama çalıştığı zaman çalışacak blok
        this.getValues().subscribe(function (data) {
            _this.values = data;
        });
    };
    //get values functionu
    ValueComponent.prototype.getValues = function () {
        return this.httpClient.get("http://localhost:49521/api/values");
    };
    ValueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-value',
            template: __webpack_require__(/*! ./value.component.html */ "./src/app/value/value.component.html"),
            styles: [__webpack_require__(/*! ./value.component.css */ "./src/app/value/value.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ValueComponent);
    return ValueComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    apiUrl: "http://localhost:49521/api/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\yadaskinn\Documents\SehirRehberi\core-spa-angular\SehirRehberi\SPA\sehir-rehberi-spa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map