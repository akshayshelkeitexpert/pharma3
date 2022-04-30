import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestForQuotesPage } from './request-for-quotes.page';

const routes: Routes = [
  {
    path: '',
    component: RequestForQuotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestForQuotesPageRoutingModule {}
