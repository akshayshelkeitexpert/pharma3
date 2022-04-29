import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReplyQuotationPageRoutingModule } from './reply-quotation-routing.module';

import { ReplyQuotationPage } from './reply-quotation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReplyQuotationPageRoutingModule
  ],
  declarations: [ReplyQuotationPage]
})
export class ReplyQuotationPageModule {}
