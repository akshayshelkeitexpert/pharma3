import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssosiatesPage } from './assosiates.page';

const routes: Routes = [
  {
    path: '',
    component: AssosiatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssosiatesPageRoutingModule {}
