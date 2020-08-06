import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/api/";
  appUserUrl: string = "appUsers/";
  loginUrl: string = "appUsers/login";
  firstName: string = null
  isLoggedIn: boolean = false

  constructor(private _http: HttpClient, private router: Router) { }

  registerUser(userCredentials) {
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.firstName = res.firstName;
      this.isLoggedIn = true;
      this.goToDash();
    })
  }

  loginUser(userCredentials) {
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, userCredentials).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      console.log(res.token)
      this.firstName = res.userData.firstName;
      console.log(this.firstName, "is logged in")
      this.isLoggedIn = true;
      this.goToDash();
    }, err => {

      alert("incorrect email or passwrod")
    });
  }


  goToDash() {
    this.router.navigate(['home'])
  }


}