import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReplyQuotationPage } from './reply-quotation.page';

const routes: Routes = [
  {
    path: '',
    component: ReplyQuotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplyQuotationPageRoutingModule {}
