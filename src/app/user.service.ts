import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000/api/";
  appUserUrl: string = "appUsers/"
  firstName: string = null
  isLoggedIn: boolean = false

  constructor(private _http: HttpClient) { }

  registerUser(userCredentials) {
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }
}