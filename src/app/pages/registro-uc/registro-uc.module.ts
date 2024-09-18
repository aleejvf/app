import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUcPageRoutingModule } from './registro-uc-routing.module';

import { RegistroUcPage } from './registro-uc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUcPageRoutingModule
  ],
  declarations: [RegistroUcPage]
})
export class RegistroUcPageModule {}
