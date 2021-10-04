import { Component, OnInit } from '@angular/core';
// import { UserdetailService } from "../userdetail.service";
// import { userDetails } from "../user-details.model";
import { UserService } from '../Service/user.service';
import { ProductService } from '../Service/product.service';
import { Router } from '@angular/router';
import { CardService } from '../Service/card.service';
import { TransactionsService } from '../Service/transactions.service';
import { Products } from '../Model/Products';
import { TransactionHistories } from '../Model/TransactionHistories';
import { CardDetails } from '../Model/CardDetails';
import { Users } from '../Model/Users';
import { ProductssService } from '../productss.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: CardDetails[] = [];
  userCard: any={};
  users: Users[] = [];
  user2: any = {};  //Create the variables here
  status !: number;
  products: Products[] = [];
  trans: TransactionHistories[] = [];
  // idcard = 5;//Variable To Store Session Storage
  idcard = Number(sessionStorage.getItem('UserId'));//Variable To Store Session Storage
  showTable = 0;
  showTableStatus = 1;

  today = new Date()
  currentDate:any;
  // isTodayNextInsDate:boolean = true;

  constructor(public service:UserService , public router : Router ,public cardserv:CardService,
    public transerv : TransactionsService, private prodServ:ProductssService , public prodservice:ProductService) { }

  ngOnInit(): void {
    this.getCards();
    this.getUsers();
    this.getCardById(this.idcard);
    this.getById(this.idcard);
    this.getProducts();
    this.getTransactions();
    this.onClick();

    let dd = String(this.today.getDate()).padStart(2, '0')
    let mm = String(this.today.getMonth() + 1).padStart(2, '0')
    let yyyy = String(this.today.getFullYear());
    this.currentDate = yyyy + '-' + mm + '-' + dd;

  }

  // getById(id: number) {
  //   this.service.ServiceMethodGetUserById(id).subscribe(data => { this.user = data; })
  //   //this.service.ServiceMethodGetUsers().subscribe(data => {this.users=data;})
  // }

  //Card
  getCards() {
    this.cardserv.ServiceMethodGetCardDetails().subscribe(data => {
      this.cards = data;
    })
  }

  getCardById(id:number){
    this.cardserv.ServiceMethodGetCardDetail(id).subscribe(data=>{
      this.userCard = data
    })
  }

  //Users
  getUsers() {
    this.service.ServiceMethodGetUsers().subscribe(data => {
      this.users = data;
    }
    )
  }
  getById(id: number) {
    this.service.ServiceMethodGetUser(id).subscribe(data => {
      this.user2 = data;
      this.status = this.user2.ActivationStatus;
    }
    )
    
  }

  //Product
  getProducts() {
    this.prodservice.ServiceMethodGetProducts().subscribe(data => {
      this.products = data;
    })
  }

  //Transaction History

  getTransactions() {
    this.transerv.ServiceMethodGetTransactionHistories().subscribe(data => {
      this.trans = data;
    })
  }

  onClick() {
    if (this.showTableStatus == 0) {
      this.showTable = 2;
      this.showTableStatus = 1;
    }
    else {
      this.showTable = 1;
      this.showTableStatus = 0;
    }
  }

  feePaid(id: number){
    // if(this.user2.UserId == id){
      alert("fee");
      this.user2.ActivationStatus = 1;
      this.service.ServiceMethodPutUser(id,this.user2).subscribe();
    // }
  }

  payInstallment(id:any,pname:string,cost:any,tenure:any){
    this.prodServ.ServiceMethodSetTransactionDetails('put',id,pname,cost,tenure)
    this.router.navigate(['Payment']);
  }
}
