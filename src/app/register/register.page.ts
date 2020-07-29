import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,

  }

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  signUp() {
    this._userService.registerUser(this.form)
  }

}
