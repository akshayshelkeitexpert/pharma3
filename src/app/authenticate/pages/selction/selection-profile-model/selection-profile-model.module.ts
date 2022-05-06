import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectionProfileModelPageRoutingModule } from './selection-profile-model-routing.module';

import { SelectionProfileModelPage } from './selection-profile-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectionProfileModelPageRoutingModule
  ],
  declarations: [SelectionProfileModelPage]
})
export class SelectionProfileModelPageModule {}
