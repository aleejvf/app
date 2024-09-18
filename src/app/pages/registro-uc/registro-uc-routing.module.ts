import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUcPage } from './registro-uc.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUcPageRoutingModule {}
