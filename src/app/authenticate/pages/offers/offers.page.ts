import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  public offers: any[] = [
    { type: 'success' },
    { type: 'warning' },
    { type: 'info' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
