import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quotes-profile',
  templateUrl: './quotes-profile.page.html',
  styleUrls: ['./quotes-profile.page.scss'],
})
export class QuotesProfilePage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }
  prevTab() {
    this.navCtrl.navigateRoot('/admin/quoterequest');
  }
}
