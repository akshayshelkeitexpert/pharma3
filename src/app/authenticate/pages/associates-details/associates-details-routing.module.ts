import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociatesDetailsPage } from './associates-details.page';

const routes: Routes = [
  {
    path: '',
    component: AssociatesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociatesDetailsPageRoutingModule {}
