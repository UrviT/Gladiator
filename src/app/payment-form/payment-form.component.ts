// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { ProductssService } from '../productss.service';
import { CardService } from '../Service/card.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  FirstName = 'FN';
  LastName = 'LN';
  EmailId ='EmailId';
  MobileNo = 'MobileNo';
  Bank = 'Bank';
  AccountNo = 'Account num';

  ProductName = 'ProductN';
  // ProductDetails = 'ProductD';

  CardType = 'CardT';
  CreditsLeft =0;

  InstallmentAmt=0;
  NextInstallment='';
  // Timestamp:Date;
  AckMessage: string = '';
  Result:string='';

  thisUser: any
  userObj:any={};
  productObj:any={};
  cardObj:any={};

  ProdID !: number
  Amount !: number
  Tenure !: number

  // date:any;
  // latestDate:any;
    
  constructor(private userService:UserService,private cardService:CardService,
    private service:PaymentService, private service2:ProductssService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.ProdID,this.Amount, this.Tenure = this.service2.ServiceMethodGetTransactionDetails();
      // this.service2.ServiceMethodGetTransactionDetails().
      this.thisUser = sessionStorage.getItem('UserId');
      this.getDetails()
      // this.dateNow()
  }

  Payment(){
    // this.dateNow();
    var PaymentObject = {
      TransactionID : 0,
      UserID : sessionStorage.getItem('UserId') ,
      ProductID: this.ProdID,
      Tenure: this.Tenure,
      InstallmentAmt: this.Amount,
      NextInstallment: '',
      Timestamp: new Date() 
    }
  
    this.service.ServiceMethodCustomerPayment(PaymentObject).subscribe();
    this.AckMessage="Payment Successfully Done";
  }

  getDetails(){
    this.userService.ServiceMethodGetUser(Number(this.thisUser)).subscribe(data =>{
      this.userObj = data;
      this.FirstName = this.userObj.FirstName;
      this.LastName = this.userObj.LastName;
      this.EmailId = this.userObj.EmailId;
      this.MobileNo = this.userObj.MobileNumber;
      this.Bank = this.userObj.BankName;
      this.AccountNo = this.userObj.AccountNumber;
    });
    this.cardService.ServiceMethodGetCardDetail(Number(this.thisUser)).subscribe(data=>{
      this.cardService = data;
      this.CardType = this.cardObj.CType; 
      this.CreditsLeft = this.cardObj.CreditLeft
    });
    this.service2.ServiceMethodGetProductByID(this.ProdID).subscribe(data=>{
      this.productObj = data;
      this.ProductName = this.productObj.PName;
    });
  }

  // dateNow(){
  //   this.date=new Date();
  //   this.latestDate =this.datepipe.transform(this.date, 'yyyy-MM-dd');   
  // }
}
