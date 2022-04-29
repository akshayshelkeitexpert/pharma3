import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorizedDescriptionPageRoutingModule } from './authorized-description-routing.module';

import { AuthorizedDescriptionPage } from './authorized-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorizedDescriptionPageRoutingModule
  ],
  declarations: [AuthorizedDescriptionPage]
})
export class AuthorizedDescriptionPageModule {}
