import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { userDetails } from '../user-details.model';
import { UserdetailService } from '../userdetail.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  formValue !: FormGroup;
  /* user_id : any;
   u_id : any;
   user1 = new userDetails();*/
  //  users : userDetails[]=[];
  users: any = [];
  user:any;
  user1 = new userDetails();
  // user_id!: number;

  constructor(public service: UserdetailService) { }

  ngOnInit(): void {
    this.service.ServiceMethodGetUsers().subscribe(data => {
      this.users = data;
    });
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.user1 = new userDetails();
  }

  deleteUser(id:number){
    this.service.ServiceMethodDeleteUser(id).subscribe();
  }

  // activateUser(id:number){
  //   alert(id);
  //   this.service.ServiceMethodGetUserById(id).subscribe(data => {this.user=data});
  //   this.user.ActivationStatus=2;
  //   // alert(this.user1 | JsonPipe);
  //   alert(String(this.user.Id));
  //   this.service.ServiceMethodPutuserDetails(id, this.user).subscribe();
  //   alert(this.user.ActivationStatus);
  //   // this.service.ServiceMethodGetProductByID(this.id).subscribe(data => this.SelectedProduct=data);
  // }

  activateUser(id:number){
    alert(id);
    this.service.ServiceMethodGetUserById(id).subscribe(data => {this.user1=data});
    this.user1.activation_status=2;
    // alert(this.user1 | JsonPipe);
    alert(this.user1.user_id);
    this.service.ServiceMethodPutuserDetails(id, this.user1).subscribe();
    alert(this.user1.activation_status);
    // this.service.ServiceMethodGetProductByID(this.id).subscribe(data => this.SelectedProduct=data);
  }
  /*
  onEdit(id:number)
  {
    u_id :id;
  }
  onSubmit(form:NgForm){
    this.updateRecord(form);
  }
  updateRecord(form: NgForm) {
    this.service.ServiceMethodPutuserDetails().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        console.log("Record updated Successfully");
      },
      err => { console.log(err); }
    );
  }
  updateUser(user_id:number,user1:userDetails){
    if(confirm("Can we make the changes")){
    this.service.ServiceMethodPutuserDetails().subscribe(data =>
      {
        this.user1=data;
      })
    }
  }*/

}
