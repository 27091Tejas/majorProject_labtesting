import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private userservice:UserServicesService) { }

  ngOnInit(): void {
    this.userservice.getallData().subscribe((res)=>{
      console.log(res,"res==>");
    })
  }

}
