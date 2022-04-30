import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/pages/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./authenticate/pages/main/main.module').then(m => m.MainPageModule)
  },  {
    path: 'quotes',
    loadChildren: () => import('./authenticate/pages/quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'quote-history',
    loadChildren: () => import('./authenticate/pages/quote-history/quote-history.module').then( m => m.QuoteHistoryPageModule)
  },
  {
    path: 'quote-request',
    loadChildren: () => import('./authenticate/pages/quote-request/quote-request.module').then( m => m.QuoteRequestPageModule)
  },
  {
    path: 'selected-vendors',
    loadChildren: () => import('./authenticate/pages/selected-vendors/selected-vendors.module').then( m => m.SelectedVendorsPageModule)
  },
  {
    path: 'offer-details',
    loadChildren: () => import('./authenticate/pages/offer-details/offer-details.module').then( m => m.OfferDetailsPageModule)
  },
  {
    path: 'request-for-quotes',
    loadChildren: () => import('./authenticate/pages/request-for-quotes/request-for-quotes.module').then( m => m.RequestForQuotesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
