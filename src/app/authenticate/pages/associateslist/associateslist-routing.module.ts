import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociateslistPage } from './associateslist.page';

const routes: Routes = [
  {
    path: '',
    component: AssociateslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociateslistPageRoutingModule {}
