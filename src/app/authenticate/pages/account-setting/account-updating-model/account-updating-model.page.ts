import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account-updating-model',
  templateUrl: './account-updating-model.page.html',
  styleUrls: ['./account-updating-model.page.scss'],
})
export class AccountUpdatingModelPage implements OnInit {
  openedFor: string = null;
  constructor() { }

  ngOnInit() {
    console.log(this.openedFor)
  }


}
