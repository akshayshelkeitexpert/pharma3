import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-selected-vendors',
  templateUrl: './selected-vendors.page.html',
  styleUrls: ['./selected-vendors.page.scss'],
})
export class SelectedVendorsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  prevTab() {
    this.navCtrl.navigateRoot('/admin/quoterequest');
  }

}
