import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-for-quotes',
  templateUrl: './request-for-quotes.page.html',
  styleUrls: ['./request-for-quotes.page.scss'],
})
export class RequestForQuotesPage implements OnInit {

  locations = [
    {
      id: 1, state: 'West Bangal',
      cities: [{ id: 1, city_name: "kolkatta" }, { id: 2, city_name: "shirur" }]
    },
    {
      id: 2, state: 'Maharashtra',
      cities: [{ id: 1, city_name: "Pune" }, { id: 2, city_name: "mumbai" }]
    }
  ];


  pageState = {
    selectedState: null,
    selectedCity: null,
    canShowDetails: false,
    isStateSelected: false,
    isCitySelected: false
  }
  constructor() { }

  ngOnInit() {
  }

}
