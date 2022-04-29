import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountUpdatingModelPage } from './account-updating-model.page';

const routes: Routes = [
  {
    path: '',
    component: AccountUpdatingModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountUpdatingModelPageRoutingModule {}
