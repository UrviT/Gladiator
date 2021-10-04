// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { ProductssService } from '../productss.service';
import { CardService } from '../Service/card.service';
import { TransactionsService } from '../Service/transactions.service';
import { UserService } from '../Service/user.service';
// import { DatePipe } from "@angular/common";

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
  ActivationStatus = 0;

  ProductName = 'ProductN';
  PCost = 0;
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
  totalMoney=0;

  ProdID !: number
  Amount !: number
  Tenure !: number
  postPut !: string;
  ProdName !:string;

  datetime:any;
  date:any;
  month:any;
  year:any;
  today:any=new Date()

  motnhNumber:any =[{'Jan':1},
              {'Feb':2},
              {'Mar':3},
              {'Apr':4},
              {'May':5},
              {'Jun':6},
              {'Jul':7},
              {'Aug':8},
              {'Sep':9},
              {'Oct':10}
              ]
  // latestDate:any;
  // monthVar:any;
  allTransactions:any=[];
    
  constructor(private router:Router, private userService:UserService,private cardService:CardService, private transServ:TransactionsService,
    private service:PaymentService, private service2:ProductssService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      // this.postPut,this.ProdID,this.Amount,this.Tenure = this.service2.ServiceMethodGetTransactionDetails();
      // this.service2.ServiceMethodGetTransactionDetails()
      this.postPut = this.service2.ServiceMethodGetMethodName();
      this.ProdID = this.service2.ServiceMethodGetSelectedPid();
      this.Amount = this.service2.ServiceMethodGetAmount();
      this.Tenure = this.service2.ServiceMethodGetTenure();
      this.ProdName = this.service2.ServiceMethodGetPname()
      
      this.thisUser = sessionStorage.getItem('UserId');
      this.getDetails()
      this.getTransactionDetails()
      // this.dateNow()
  }

  Payment(){
    // this.dateNow();
    // this.date = new Date().getDate().toString();
    // this.month = new Date().getMonth.toString();
    // this.year = new Date().getFullYear.toString();

    let dd=String(this.today.getDate()).padStart(2,'0')
    let mm = String(this.today.getMonth()+1).padStart(2,'0')
    let y=String(this.today.getFullYear());

    let nextDate = y+'-'+mm+'-'+dd;
    console.log(nextDate)

    // this.datetime = this.year+"-"+this.month+"-"+this.date;
    // let time :any = this.datetime.toString().substring(4,15)
    // this.datetime=this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    // console.log(this.datetime);
    var PaymentObject = {
      id : 0,
      userId : Number(this.thisUser),
      productId: this.ProdID,
      tenure: this.Tenure-1,
      amountPaid: this.Amount,
      nextDate: nextDate,
      timestamp: nextDate
    }
  
    this.transServ.ServiceMethodPostTransactionDetails(PaymentObject).subscribe();
    this.AckMessage="Payment Successfully Done";
    this.router.navigate(['Dashboard'])

    let tobepaid = 0;
    if (this.CardType=='Gold'){
      this.totalMoney=50000
    }
    else if (this.CardType=='Titanium'){
      this.totalMoney=100000
    }
    //deduct money from card
    var cardObj={
      id : Number(this.thisUser),
      userId : Number(this.thisUser),
      ctype : this.CardType,
      creditLeft : this.CreditsLeft-this.PCost,
      toBePaid : (this.totalMoney-this.CreditsLeft)
    }
    this.cardService.ServiceMethodPutCardDetails(Number(this.thisUser),cardObj).subscribe();
  }
  
  PaymentUpdate(transId: number){
    // this.dateNow();
    this.datetime = new Date();
    //NewNextDate = nextDate:2021-12-08(+1 month)

    let time :any = this.datetime.toString().substring(4,15)

    var PaymentObject = {
      id : transId,
      userId : Number(this.thisUser),
      productId: this.ProdID,
      tenure: this.Tenure-1,
      amountPaid: this.Amount,
      nextDate: time,
      timestamp: time
    }
    this.transServ.ServiceMethodPutTransactionDetails(transId,PaymentObject).subscribe();
    this.AckMessage="Payment Successfully Done";
  //if the Tenure is 1 (this.Tenure-1==0)(means this is the last payment), then update the card details along with 
  //details in transactions table, creditLeft=creditLeft+productCost
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
      this.ActivationStatus = this.userObj.ActivationStatus
    });
    this.cardService.ServiceMethodGetCardDetail(Number(this.thisUser)).subscribe(data=>{
      this.cardObj = data;
      this.CardType = this.cardObj.Ctype; 
      this.CreditsLeft = this.cardObj.CreditLeft
    });
    this.service2.ServiceMethodGetProductByID(this.ProdID).subscribe(data=>{
      this.productObj = data;
      this.ProductName = this.productObj.PName;
      this.PCost = this.productObj.Cost;
    });
  }

  getTransactionDetails(){
    this.transServ.ServiceMethodGetTransactionHistories().subscribe(data=>{
      this.allTransactions=data;
    })
  }
  // dateNow(){
  //   this.date=new Date();
  //   this.latestDate =this.datepipe.transform(this.date, 'yyyy-MM-dd');   
  // }
  giveAlert(){
    alert("Please get your card validated before usage.")
    this.router.navigate(['Dashboard'])
  }
}
