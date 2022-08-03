import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor() { }
  name:string="";
  email:string="";
  address:string="";
  gender:string="";
  password:string="";
  confirmPassword:string="";


  ngOnInit(): void {
  }

   getDetails(){
   
    console.log("function called! "+this.name+" "+this.email+" "+this.address+" "+this.gender)

  }


}
