import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../Service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EmailID: string = '';
  Password: string = '';

  AckMessage: string = '';
  Result: string = '';
  message: string = '';
  CustomerList: any = [];

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
    this.GetDetails()
  }
  LoginUser() {
    this.AckMessage = "Login Entered";

    var CustomerObject = {
      id: 0,
      firstName: '',
      lastName:'',
      emailId: this.EmailID.trim(),
      // UserName: this.UserName.trim(),
      password: this.Password.trim(),
      mobileNumber: '',
      address: '',
      // CardType: '',
      bankNumber: '',
      accountNo: '',
      ifscCode: '',
      activationStatus: 0
    };

    this.service.ServiceMethodUserLogin(CustomerObject)
      .subscribe(res => {

        const LoggedUserEmail = (<any>res).EmailId;
        const LoggedUser = (<any>res).Id;
        sessionStorage.setItem('UserMail', LoggedUserEmail);
        sessionStorage.setItem('UserId', LoggedUser);
        console.log(res);
        this.router.navigate(['root']);
        this.message = "Login Sucessfully"
        this.router.navigateByUrl("Products")      },
        error => {
          this.message = "Invalid User"
        });

    this.Result = "Sesssion successfully created with Email ID";
    // 

  }
  GetDetails() {
    this.service.ServiceMethodLoginValidity().subscribe(data => {
      this.CustomerList = data;
    });
  }

}
