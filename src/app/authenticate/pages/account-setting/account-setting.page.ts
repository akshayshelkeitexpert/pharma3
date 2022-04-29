import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AccountUpdatingModelPage } from './account-updating-model/account-updating-model.page';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }
  async plusbuttonmodel(reason: string, modalClass: string) {
    const presentModel = await this.modalCtrl.create({
      component: AccountUpdatingModelPage,
      componentProps: {
        openedFor: reason
      },
      showBackdrop: true,
      mode: 'md',
      animated: true,
      cssClass: modalClass
    });

    await presentModel.present();

  }

}
