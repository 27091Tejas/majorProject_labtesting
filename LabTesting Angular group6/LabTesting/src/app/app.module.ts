import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { AdminModule } from './admin/admin.module';
import { HeaderNewComponent } from './header-new/header-new.component';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule}  from '@angular/common/http'
import { UserServicesService } from './services/user-services.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminservicesService } from './services/adminservices.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderNewComponent,
    HomeComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    RouterModule,
    UserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserServicesService,AdminservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
