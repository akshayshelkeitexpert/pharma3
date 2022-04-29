import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociateslistPageRoutingModule } from './associateslist-routing.module';

import { AssociateslistPage } from './associateslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociateslistPageRoutingModule
  ],
  declarations: [AssociateslistPage]
})
export class AssociateslistPageModule {}
