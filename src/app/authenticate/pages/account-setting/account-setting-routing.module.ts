import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountSettingPage } from './account-setting.page';

const routes: Routes = [
  {
    path: '',
    component: AccountSettingPage
  },
  {
    path: 'account-updating-model',
    loadChildren: () => import('./account-updating-model/account-updating-model.module').then( m => m.AccountUpdatingModelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountSettingPageRoutingModule {}
