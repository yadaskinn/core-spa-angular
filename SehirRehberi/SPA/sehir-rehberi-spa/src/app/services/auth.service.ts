import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/registerUser';
import { environment } from 'src/environments/environment';
import { error } from '@angular/compiler/src/util';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private alertify: AlertifyService) { }
    path = environment.apiUrl+"auth/";
  //path = "http://localhost:49521/api/auth/";
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();

  TOKEN_KEY = "token";

  //kullanıcı giriş
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    debugger;
    this.httpClient.post(this.path + "Login", loginUser, { headers }).subscribe(data => {
      debugger;
      this.saveToken(data);
      this.userToken=data;
      this.decodedToken = this.jwtHelper.decodeToken(data.toString());
      this.alertify.success("Sisteme giriş yapıldı.");
      return this.router.navigateByUrl('/city');
    },error=>{
      debugger;
      this.alertify.error("Kullanıcı adı veya şifreniz hatalıdır.");
    })

  }

  //kullanıcı kayıt.
  register(registerUser: RegisterUser) {
    debugger;
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.path + "Register", registerUser, { headers }).subscribe(data => {
      debugger;
      // this.saveToken(data['tokenString']);
      // this.userToken=data['tokenString'];
      // this.decodedToken = this.jwtHelper.decodeToken(data['tokenString']);
      // this.alertify.success("Sisteme giriş yapıldı.");
      // return this.router.navigateByUrl('/city');
    return this.alertify.success("Sisteme kayıt oldunuz.");
    })
  }

  //kullanıcı logout
  logOut() {
    this.alertify.error("Sisteme çıkış yapıldı.");
    localStorage.removeItem(this.TOKEN_KEY);
  }


  //kullanıcı sistemde aktif mi
  loggedIn() {
    return tokenNotExpired(this.TOKEN_KEY);
  }

  //mevcut kullanıcı 
  getCurrentUserId() {
    return this.jwtHelper.decodeToken(this.Token).nameid
  }

  //token local storage kaydediyoruz.
  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token)
  }

  //token
  get Token() {
    return localStorage.getItem(this.TOKEN_KEY)
  }


}
