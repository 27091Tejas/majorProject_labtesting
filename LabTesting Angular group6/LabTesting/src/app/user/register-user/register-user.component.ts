import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient,  } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  errormsg: any;
  successmsg:any;
 

  constructor(private userservice:UserServicesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    // private toastr: ToastrService
    
    ) { }
  
  


  ngOnInit(): void {
  }

  userForm=new FormGroup({
  'name':new FormControl('',Validators.required),
   'email':new FormControl('',[Validators.required,Validators.email,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
  'contact_no':new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(10)]), 
  'password':new FormControl('',Validators.required),
  'role':new FormControl('user')
   

  })
  RegisterUser(){
   
    // this.userservice.registerUser(this.userForm.value).subscribe((res)=>{
    //   console.log(res,"res==>");
    // })
     if(this.userForm.valid)
     {
      console.log(this.userForm.value)
      this.userservice.registerUser(this.userForm.value).subscribe((res)=>{
    
        console.log(res,'res==>');
        this.userForm.reset();
        this.successmsg=res.message;
      });
     }
     else{
      this.errormsg='all fields are required !';
     }
  };




}
