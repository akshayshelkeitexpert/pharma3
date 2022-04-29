import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: '',
        redirectTo: 'replyquotation',
        pathMatch: 'full'
      },
      {
        path: 'accountsetting',
        loadChildren: () => import('../account-setting/account-setting.module').then(m => m.AccountSettingPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },

      {
        path: 'authorizedvendor',
        loadChildren: () => import('../authorized-vendor/authorized-vendor.module').then(m => m.AuthorizedVendorPageModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('../offers/offers.module').then(m => m.OffersPageModule)
      },
      {
        path: 'associateslist',
        loadChildren: () => import('../associateslist/associateslist.module').then(m => m.AssociateslistPageModule)
      },
      {
        path: 'associatesDetails',
        loadChildren: () => import('../associates-details/associates-details.module').then(m => m.AssociatesDetailsPageModule)
      },
      {
        path: 'associates',
        loadChildren: () => import('../assosiates/assosiates.module').then(m => m.AssosiatesPageModule)
      },
      {
        path: 'comments',
        loadChildren: () => import('../comments/comments.module').then(m => m.CommentsPageModule)
      },
      {
        path: 'offersone',
        loadChildren: () => import('../offersone/offersone.module').then(m => m.OffersonePageModule)
      },
      {
        path: 'authdescription',
        loadChildren: () => import('../authorized-description/authorized-description.module').then(m => m.AuthorizedDescriptionPageModule)
      },
      {
        path: 'documentview',
        loadChildren: () => import('../document-view/document-view.module').then(m => m.DocumentViewPageModule)
      },
      {
        path: 'quotes',
        loadChildren: () => import('../quotes/quotes.module').then(m => m.QuotesPageModule)
      },
      {
        path: 'quotenotification',
        loadChildren: () => import('../quote-notification/quote-notification.module').then(m => m.QuoteNotificationPageModule)
      },
      {
        path: 'quotedetails',
        loadChildren: () => import('../quote-details/quote-details.module').then(m => m.QuoteDetailsPageModule)
      },
      {
        path: 'replyquotation',
        loadChildren: () => import('../reply-quotation/reply-quotation.module').then(m => m.ReplyQuotationPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
