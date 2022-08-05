import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
