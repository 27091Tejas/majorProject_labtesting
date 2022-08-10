import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminService:AdminservicesService) { }
  tests:any

  ngOnInit(): void {
    this.adminService.getallTests().subscribe((res)=>{
      console.log(res,"res==>");
      this.tests=res.data;
    })
  }

  
}
