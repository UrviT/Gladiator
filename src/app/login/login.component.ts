import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../Service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EmailId: string = '';
  Password: string = '';

  AckMessage: string = '';
  Result: string = '';
  message: string = '';
  CustomerList: any = [];

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }
  LoginUser() {
    this.AckMessage = "Login Entered";

    var CustomerObject = {
      AccountID: 0,
      FirstName: '',
      LastName:'',
      Email: this.EmailId.trim(),
      // UserName: this.UserName.trim(),
      Password: this.Password.trim(),
      MobileNo: '',
      Address: '',
      // CardType: '',
      Bank: '',
      AccountNo: '',
      IFSC: '',
      ActivattionStatus: 0
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

      },
        error => {
          this.message = "Invalid User"
        });

    this.Result = "Sesssion successfully created with Email ID";
  }
  GetDetails() {
    this.service.ServiceMethodLoginValidity().subscribe(data => {
      this.CustomerList = data;
    });
  }

}
