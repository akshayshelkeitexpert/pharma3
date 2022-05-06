import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-associates-details',
  templateUrl: './associates-details.page.html',
  styleUrls: ['./associates-details.page.scss'],
})
export class AssociatesDetailsPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  prevTab() {
    this.nav.navigateRoot('/admin/associateslist')
  }
}
