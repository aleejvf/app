import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiUsPageRoutingModule } from './confi-us-routing.module';

import { ConfiUsPage } from './confi-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiUsPageRoutingModule
  ],
  declarations: [ConfiUsPage]
})
export class ConfiUsPageModule {}
