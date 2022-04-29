import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSelctionPage } from './map-selction.page';

const routes: Routes = [
  {
    path: '',
    component: MapSelctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSelctionPageRoutingModule {}
