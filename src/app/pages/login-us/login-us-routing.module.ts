import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginUsPage } from './login-us.page';

const routes: Routes = [
  {
    path: '',
    component: LoginUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginUsPageRoutingModule {}
