import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpalshScreenPageRoutingModule } from './spalsh-screen-routing.module';

import { SpalshScreenPage } from './spalsh-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpalshScreenPageRoutingModule
  ],
  declarations: [SpalshScreenPage]
})
export class SpalshScreenPageModule {}
