import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersonePageRoutingModule } from './offersone-routing.module';

import { OffersonePage } from './offersone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersonePageRoutingModule
  ],
  declarations: [OffersonePage]
})
export class OffersonePageModule {}
