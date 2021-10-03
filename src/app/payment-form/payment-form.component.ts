import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { ProductssService } from '../productss.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  public FirstName = 'FN';
  LastName = 'LN';
  EmailId ='EmailId';
  MobileNo = 'MobileNo';
  Bank = 'Bank';
  ProductName = 'ProductN';
  ProductDetails = 'ProductD';
  CardType = 'CardT';
  InstallmentAmt='InstallmentAmt';
  NextInstallment='NextInstallment';
  // Timestamp:Date;
  AckMessage: string = '';
  Result:string='';

  ProdID !: number
  Amount !: number
  Tenure !: number
    
  constructor(private service:PaymentService, private service2:ProductssService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.ProdID,this.Amount, this.Tenure = this.service2.ServiceMethodGetTransactionDetails();
  }

  Payment(){
    var PaymentObject = {
      TransactionID : 0,
      UserID : sessionStorage.getItem('UserId') ,
      ProductID: this.ProdID,
      Tenure: this.Tenure,
      InstallmentAmt: this.Amount,
      NextInstallment: 12,
      // Timestamp: Date =  new Date(), 

     
      // UserID:this.UserID.trim(),
      // ProductID:this.ProductID.trim(),
      // Tenure:this.Tenure.trim(),
      // NextInstallment:this.NextInstallment.trim(),
      // InstallmentAmt:this.InstallmentAmt.trim(),
      // CurrentDate:this.CurrentDate.trim(),
    }
  
    this.service.ServiceMethodCustomerPayment(PaymentObject).subscribe();
    this.AckMessage="Payment Successfully Done";
    
  }
}
