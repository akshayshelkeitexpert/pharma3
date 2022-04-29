import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssosiatesPageRoutingModule } from './assosiates-routing.module';

import { AssosiatesPage } from './assosiates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssosiatesPageRoutingModule
  ],
  declarations: [AssosiatesPage]
})
export class AssosiatesPageModule {}
