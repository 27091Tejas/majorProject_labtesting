import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  constructor() { }
  AdminName:string="";
  AdminAddress:string="";
  AdminEmail:string="";
  gender:string="";
  AdminPassword:string="";
  AdminConfirmPassword:string="";

  ngOnInit(): void {
  }

  getAdminDetails(){
   
    console.log("function called! "+this.AdminName+" "+this.AdminAddress+" "+this.AdminEmail+" .")

  }

}
