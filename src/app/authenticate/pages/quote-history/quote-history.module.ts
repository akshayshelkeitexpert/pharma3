import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteHistoryPageRoutingModule } from './quote-history-routing.module';

import { QuoteHistoryPage } from './quote-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuoteHistoryPageRoutingModule
  ],
  declarations: [QuoteHistoryPage]
})
export class QuoteHistoryPageModule {}
