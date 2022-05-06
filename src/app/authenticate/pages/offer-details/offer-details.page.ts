import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.page.html',
  styleUrls: ['./offer-details.page.scss'],
})
export class OfferDetailsPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  prev() {
    this.nav.navigateRoot('/admin/offers')
  }
}
