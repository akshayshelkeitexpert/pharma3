import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.page.html',
  styleUrls: ['./quote-request.page.scss'],
})
export class QuoteRequestPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }
  prevTab() {
    this.navCtrl.navigateRoot('/admin/quotes');
  }

}
