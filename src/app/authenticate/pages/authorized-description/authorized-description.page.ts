import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-authorized-description',
  templateUrl: './authorized-description.page.html',
  styleUrls: ['./authorized-description.page.scss'],
})
export class AuthorizedDescriptionPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  prevTab() {
    this.nav.navigateRoot('/admin/authorizedvendor')
  }

}
