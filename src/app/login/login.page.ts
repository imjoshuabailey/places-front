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
    this._userService.loginUser(this.form).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      console.log(this._userService.firstName, "is logged in")
      this._userService.isLoggedIn = true;
    })
  }

}
