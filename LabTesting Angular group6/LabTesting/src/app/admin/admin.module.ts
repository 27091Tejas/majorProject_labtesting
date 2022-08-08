import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [
    RegisterAdminComponent,
    AdminDashboardComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    
  ],
  exports: [
    RegisterAdminComponent,
    AdminDashboardComponent
  ]
})
export class AdminModule { }
