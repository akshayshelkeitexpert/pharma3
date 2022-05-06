import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-associateslist',
  templateUrl: './associateslist.page.html',
  styleUrls: ['./associateslist.page.scss'],
})
export class AssociateslistPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  prevTab() {
    this.nav.navigateRoot('/admin/associates')
  }

}
