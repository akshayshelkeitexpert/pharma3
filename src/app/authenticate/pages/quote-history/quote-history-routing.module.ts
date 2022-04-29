import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteHistoryPage } from './quote-history.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteHistoryPageRoutingModule {}
