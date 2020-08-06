import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = {
    email: null,
    password: null,

  }

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  signIn() {
    this._userService.loginUser(this.form)
  }

}
