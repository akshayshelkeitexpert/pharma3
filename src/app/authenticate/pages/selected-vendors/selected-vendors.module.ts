import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedVendorsPageRoutingModule } from './selected-vendors-routing.module';

import { SelectedVendorsPage } from './selected-vendors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedVendorsPageRoutingModule
  ],
  declarations: [SelectedVendorsPage]
})
export class SelectedVendorsPageModule {}
