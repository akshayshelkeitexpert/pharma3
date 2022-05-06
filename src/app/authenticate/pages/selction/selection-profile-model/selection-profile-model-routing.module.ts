import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectionProfileModelPage } from './selection-profile-model.page';

const routes: Routes = [
  {
    path: '',
    component: SelectionProfileModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionProfileModelPageRoutingModule {}
