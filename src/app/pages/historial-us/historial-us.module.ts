import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialUsPageRoutingModule } from './historial-us-routing.module';

import { HistorialUsPage } from './historial-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialUsPageRoutingModule
  ],
  declarations: [HistorialUsPage]
})
export class HistorialUsPageModule {}
