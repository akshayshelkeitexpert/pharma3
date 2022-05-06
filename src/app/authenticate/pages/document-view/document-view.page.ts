import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.page.html',
  styleUrls: ['./document-view.page.scss'],
})
export class DocumentViewPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  prevTab() {
    this.nav.navigateRoot('/admin/authdescription')
  }

}
