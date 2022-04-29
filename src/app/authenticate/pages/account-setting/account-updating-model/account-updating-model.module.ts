import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountUpdatingModelPageRoutingModule } from './account-updating-model-routing.module';

import { AccountUpdatingModelPage } from './account-updating-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountUpdatingModelPageRoutingModule
  ],
  declarations: [AccountUpdatingModelPage]
})
export class AccountUpdatingModelPageModule {}
