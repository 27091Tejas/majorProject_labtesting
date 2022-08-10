import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { HomeComponent } from './home/home.component';
import { AllUsersComponent } from './user/all-users/all-users.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'RegUser', component:RegisterUserComponent
  },
  {
    path:'', component:HomeComponent
  },
  {
    path:'RegAdmin', component:RegisterAdminComponent
  },
  {
    path:'adminDashboard', component:AdminDashboardComponent
  },
  {
    path:'allUsers', component:AllUsersComponent
  },
  {
    path:'userDashboard', component:UserDashboardComponent
  },
  {
    path:'userLogin', component:LoginComponent
  },
  {
    path:'adminLogin', component:AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
