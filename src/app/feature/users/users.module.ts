import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

import { CreateUserComponent } from './create-user/create-user.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { FilterUserByNamePipe } from './../../shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { ImagesUserPipe } from './../../shared/pipes/images-user/images-user.pipe';

import { UsersService } from './create-user/shared/services/users/users.service';
@NgModule({
  declarations: [
    NavBarComponent,
    CreateUserComponent,
    HomeUserComponent,
    ListUsersComponent,
    FilterUserByNamePipe,
    ImagesUserPipe

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersRoutingModule
  ], providers: [UsersService]
})
export class UsersModule {}
