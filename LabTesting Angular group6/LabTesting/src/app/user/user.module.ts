import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RegisterUserComponent,
    AllUsersComponent,
    UserDashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule

  ],
  exports: [
    RegisterUserComponent
  ]
})
export class UserModule { }
