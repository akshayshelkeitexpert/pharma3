import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizedVendorPage } from './authorized-vendor.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorizedVendorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedVendorPageRoutingModule {}
