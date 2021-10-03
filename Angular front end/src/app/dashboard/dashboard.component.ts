import { Component, OnInit } from '@angular/core';
import { UserdetailService } from "../userdetail.service";
import { userDetails } from "../user-details.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  status: string = 'Activated';
  user : any; 
  showTable : boolean = false;
  //users : userDetails[]=[];

  constructor(public service:UserdetailService) { }

  ngOnInit(): void {
    this.getById(1);
  }

  getById(id:number)
  {
    this.service.ServiceMethodGetUserById(id).subscribe(data => {this.user=data;})
    //this.service.ServiceMethodGetUsers().subscribe(data => {this.users=data;})
  }
  putStatus(activationstatus:number){
    if(activationstatus===0){
      this.status='Unactivated';
    }
    if(activationstatus===1){
      this.status='To be verified';
    }
    if(activationstatus===2){
      this.status='Activated';
    }
  }

}
