import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociatesDetailsPageRoutingModule } from './associates-details-routing.module';

import { AssociatesDetailsPage } from './associates-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociatesDetailsPageRoutingModule
  ],
  declarations: [AssociatesDetailsPage]
})
export class AssociatesDetailsPageModule {}
