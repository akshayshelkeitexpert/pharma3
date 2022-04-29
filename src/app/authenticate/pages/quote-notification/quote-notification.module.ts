import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteNotificationPageRoutingModule } from './quote-notification-routing.module';

import { QuoteNotificationPage } from './quote-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuoteNotificationPageRoutingModule
  ],
  declarations: [QuoteNotificationPage]
})
export class QuoteNotificationPageModule {}
