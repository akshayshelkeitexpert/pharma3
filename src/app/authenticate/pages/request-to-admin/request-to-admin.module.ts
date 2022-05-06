import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestToAdminPageRoutingModule } from './request-to-admin-routing.module';

import { RequestToAdminPage } from './request-to-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestToAdminPageRoutingModule
  ],
  declarations: [RequestToAdminPage]
})
export class RequestToAdminPageModule {}
