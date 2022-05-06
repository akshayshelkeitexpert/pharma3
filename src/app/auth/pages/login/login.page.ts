import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROLES_MASTER } from 'src/app/core/constants/application.constants';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPsw: boolean = false;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  changePassword() {
    console.log(this.showPsw);
    this.showPsw = !this.showPsw
  }

  login() {
    const userDtls = {
      name: "sachin mohare",
      role: ROLES_MASTER.SELLER
    }
    this.authService.saveUserDetail(userDtls);
    this.router.navigateByUrl('/admin')
  }

}
