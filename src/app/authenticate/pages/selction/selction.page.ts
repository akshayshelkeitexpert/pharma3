import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SharedDataService } from 'src/app/core/services/shared-data/shared-data.service';
import { SelctionPageModule } from './selction.module';
import { SelectionProfileModelPage } from './selection-profile-model/selection-profile-model.page';

@Component({
  selector: 'app-selction',
  templateUrl: './selction.page.html',
  styleUrls: ['./selction.page.scss'],
})
export class SelctionPage implements OnInit {

  constructor(private authService: AuthService,
    private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPopover(event) {
    const popover = await this.popoverCtrl.create({
      component: SelectionProfileModelPage,
      cssClass: "request-poppover-modal",
      showBackdrop: false,
      event
    });

    await popover.present();
  }

  setRole(role: string) {
    const userDtls = this.authService.getUserDetail;
    userDtls.role = role;
    this.authService.saveUserDetail(userDtls);
  }
}
