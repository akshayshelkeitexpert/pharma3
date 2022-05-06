import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quote-notification',
  templateUrl: './quote-notification.page.html',
  styleUrls: ['./quote-notification.page.scss'],
})
export class QuoteNotificationPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }
  prevTab() {
    this.navCtrl.navigateRoot('/admin/quoterequest');
  }

}
