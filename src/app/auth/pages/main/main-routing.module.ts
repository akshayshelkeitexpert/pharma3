import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'forgotpassword',
        loadChildren: () => import('../forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
      },
      {
        path: 'otp',
        loadChildren: () => import('../otp/otp.module').then(m => m.OtpPageModule)
      },
      {
        path: 'selection',
        loadChildren: () => import('../selction/selction.module').then(m => m.SelctionPageModule)
      },
      {
        path: 'mapselction',
        loadChildren: () => import('../map-selction/map-selction.module').then(m => m.MapSelctionPageModule)
      },
      {
        path: 'state',
        loadChildren: () => import('../state/state.module').then(m => m.StatePageModule)
      },
      // {
      //   path: 'assosiates',
      //   loadChildren: () => import('../../../authenticate/pages/assosiates/assosiates.module').then(m => m.AssosiatesPageModule)
      // },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
