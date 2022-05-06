import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelctionPage } from './selction.page';

const routes: Routes = [
  {
    path: '',
    component: SelctionPage
  },  {
    path: 'selection-profile-model',
    loadChildren: () => import('./selection-profile-model/selection-profile-model.module').then( m => m.SelectionProfileModelPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelctionPageRoutingModule {}
