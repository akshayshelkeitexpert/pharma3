import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorizedVendorPageRoutingModule } from './authorized-vendor-routing.module';

import { AuthorizedVendorPage } from './authorized-vendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorizedVendorPageRoutingModule
  ],
  declarations: [AuthorizedVendorPage]
})
export class AuthorizedVendorPageModule {}
