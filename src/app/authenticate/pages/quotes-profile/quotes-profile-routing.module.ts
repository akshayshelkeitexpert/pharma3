import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesProfilePage } from './quotes-profile.page';

const routes: Routes = [
  {
    path: '',
    component: QuotesProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesProfilePageRoutingModule {}
