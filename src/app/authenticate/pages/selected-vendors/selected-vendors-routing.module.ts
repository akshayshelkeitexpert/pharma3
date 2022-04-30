import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedVendorsPage } from './selected-vendors.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedVendorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedVendorsPageRoutingModule {}
