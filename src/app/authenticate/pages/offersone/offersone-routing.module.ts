import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersonePage } from './offersone.page';

const routes: Routes = [
  {
    path: '',
    component: OffersonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersonePageRoutingModule {}
