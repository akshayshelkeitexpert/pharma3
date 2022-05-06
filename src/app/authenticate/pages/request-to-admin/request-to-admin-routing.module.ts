import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestToAdminPage } from './request-to-admin.page';

const routes: Routes = [
  {
    path: '',
    component: RequestToAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestToAdminPageRoutingModule {}
