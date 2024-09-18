import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginUsPageRoutingModule } from './login-us-routing.module';

import { LoginUsPage } from './login-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginUsPageRoutingModule
  ],
  declarations: [LoginUsPage]
})
export class LoginUsPageModule {}
