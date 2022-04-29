import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizedDescriptionPage } from './authorized-description.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorizedDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedDescriptionPageRoutingModule {}
