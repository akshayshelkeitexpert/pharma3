import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelctionPageRoutingModule } from './selction-routing.module';

import { SelctionPage } from './selction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelctionPageRoutingModule
  ],
  declarations: [SelctionPage]
})
export class SelctionPageModule {}
