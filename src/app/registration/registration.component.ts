import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
// import {  } from '@b';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // Name:string='';
  Id: number = 0;
  FirstName: string = '';
  LastName: string = '';
  Email: string = '';
  Password: string = '';
  MobileNo: string = '';
  Address: string = '';
  Bank: string = '';
  AccountNo: string = '';
  IFSC: any ;

  Credits: number = 0;
  CardType: string = '';
  AckMessage: string = '';
  Result: string = '';
  Obj: any;

  constructor(private service: RegisterService, private router:Router) { }

  ngOnInit(): void {
  }

  RegisterCustomer() {
    alert(sessionStorage.getItem('UserId'))
    // this.AckMessage = 'In the function';
    var CustomerObject = {
      Id: 0,
      FirstName: this.FirstName.trim(),
      LastName: this.LastName.trim(),
      EmailId: this.Email.trim(),
      Password: this.Password.trim(),
      PhoneNumber: this.MobileNo.trim(),
      Address: this.Address.trim(),
      BankName: this.Bank.trim(),
      AccountNumber: this.AccountNo.trim(),
      IfscCode: this.IFSC.trim(),
      ActivationStatus: 0
    }
    this.service.ServiceMethodCustomerRegistration(CustomerObject)
      .subscribe(async res => {
        const UId = (<any>res).Id;
        await sessionStorage.setItem('UserId', UId);
      });
    // this.Obj = this.service.ServiceMethodCustomerRegistration(CustomerObject).subscribe( );
    // // this.service.ServiceMethodCustomerRegistration(CustomerObject).subscribe();
    // this.Id = this.Obj.Id;
    //this.AckMessage = "Customer Registered Sucessfully "+sessionStorage.getItem('UserId');
    // setTimeout(() => this.layoutView(), 10000);
    //this.AckMessage = "Customer Registered Sucessfully-"+sessionStorage.getItem('UserId');
    //setTimeout(() => alert(sessionStorage.getItem('UserId')), 1000);
    // setTimeout(this.foo, 1000);

    if (this.CardType === 'Gold') {
      this.Credits = 50000;
    }
    if (this.CardType === 'Titanium') {
      this.Credits = 100000;
    }
    setTimeout(() => this.RegisterCard(), 5000);
    this.AckMessage="Your card is being made virtually"
  }

  RegisterCard() {
    alert(sessionStorage.getItem('UserId'))
    var CardObject = {
      Id: 0,
      UserId: sessionStorage.getItem('UserId'),
      Ctype: this.CardType.trim(),
      CreditLeft: this.Credits,
      ToBePaid: 0,
    }
    this.service.ServiceMethodCardRegistration(CardObject).subscribe();
    this.AckMessage = "Card created Sucessfully ";
    this.router.navigateByUrl("/Products")
  }

  // foo(){
  //   alert("thanks for waiting <3")
  // }
}
