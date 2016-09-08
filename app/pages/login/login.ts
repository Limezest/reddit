import { Component } from '@angular/core';

import { LoginService } from './service';

@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [LoginService]
})
export class LoginPage {
  public returnValue: any;

  constructor(private loginService: LoginService) {
    this.returnValue = (loginService.getToken());
    console.log(JSON.stringify(this.returnValue));
  }
}