import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelctionPage } from './selction.page';

const routes: Routes = [
  {
    path: '',
    component: SelctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelctionPageRoutingModule {}
