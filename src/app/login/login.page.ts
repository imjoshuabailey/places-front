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
      console.log(res.token)
      this._userService.firstName = res.userData.firstName;
      console.log(this._userService.firstName, "is logged in")
      this._userService.isLoggedIn = true;
    })
  }

}
