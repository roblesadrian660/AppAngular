import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { UsersService } from './users/create-user/shared/services/users/users.service';
import { LoginService } from './login/shared/services/login/login.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule

  ],
  providers: [
    UsersService,
    LoginService
  ]
})
export class FeatureModule { }
