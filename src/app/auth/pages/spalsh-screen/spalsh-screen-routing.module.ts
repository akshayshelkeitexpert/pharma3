import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpalshScreenPage } from './spalsh-screen.page';

const routes: Routes = [
  {
    path: '',
    component: SpalshScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpalshScreenPageRoutingModule {}
