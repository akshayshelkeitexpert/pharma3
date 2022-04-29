import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPsw: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  changePassword() {
    console.log(this.showPsw);
    this.showPsw = !this.showPsw
  }
}
