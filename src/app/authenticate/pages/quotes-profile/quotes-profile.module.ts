import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotesProfilePageRoutingModule } from './quotes-profile-routing.module';

import { QuotesProfilePage } from './quotes-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotesProfilePageRoutingModule
  ],
  declarations: [QuotesProfilePage]
})
export class QuotesProfilePageModule {}
