import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialUsPage } from './historial-us.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialUsPageRoutingModule {}
