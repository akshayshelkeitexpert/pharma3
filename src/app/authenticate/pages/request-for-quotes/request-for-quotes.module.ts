import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestForQuotesPageRoutingModule } from './request-for-quotes-routing.module';

import { RequestForQuotesPage } from './request-for-quotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestForQuotesPageRoutingModule
  ],
  declarations: [RequestForQuotesPage]
})
export class RequestForQuotesPageModule {}
