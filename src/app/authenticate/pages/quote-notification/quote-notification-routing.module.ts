import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteNotificationPage } from './quote-notification.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteNotificationPageRoutingModule {}
