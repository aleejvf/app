import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiUsPage } from './confi-us.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiUsPageRoutingModule {}
