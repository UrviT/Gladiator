import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkAPIService } from '../Service/link-api.service';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-forgot-pswd',
  templateUrl: './forgot-pswd.component.html',
  styleUrls: ['./forgot-pswd.component.css']
})
export class ForgotPSWDComponent implements OnInit {

  CustomerList: any = [];
  userId: any;
  name: string = '';
  to: string = '';
  cc: string = '';
  subject: string = 'This is from the EMI CARD COMPANY';
  text: string = 'This is from the EMI CARD COMPANY';
  message: string = '';
  Name: string = '';
  MobileNo: string = '';
  Email: string = '';
  UserName: string = '';
  Password: string = '';
  Address: string = '';
  CardType: string = '';
  Bank: string = '';
  AccountNo: any = '';
  IFSC: any = '';
  AckMessage: string = '';
  Result: string = '';
  name1: string = '';
  constructor(injector: Injector, private service: LoginService, private getLink:LinkAPIService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  ForgotPassword() {
    var CustomerObject = {

      to: this.Email.trim(),
      cc: this.Email.trim(),
      subject: this.subject.trim(),
      text: this.text.trim()

    }
    var ForgotPass = {
      id: 0,
      firstName: '',
      lastName: '',
      emailId: this.Email.trim(),
      password: '',
      phoneNumber: '',
      address: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      activationStatus: 0
    }
    this.service.ServiceMethodForgotPassword(ForgotPass)
      .subscribe(res => {
        CustomerObject.text = "Password: " + res.Password;
        this.sendEmail(CustomerObject);
        this.router.navigate(['Login']);


      },
        error => {
          alert("User Email Id is not Registered");
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['ForgotPass']);
        });

  }
  sendEmail(mailMessage: any) {
    // let headers = new HttpHeaders();

    // headers = headers.set('Accept', 'application/json');

    // if (mailMessage) {
    //   headers = headers.set('Content-Type', 'application/json');
    // }

    this.http.post(this.getLink.getLink()+"Login", mailMessage).subscribe(result => {
      console.log("Email sent!");
    });

  }
}
