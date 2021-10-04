import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductssService } from '../productss.service';
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})
export class IndexpageComponent implements OnInit {

  date: any;
  month: any
  year: any
  today = new Date()
  ProductList: any = [];
  constructor(private service: ProductssService, private route: Router) { }

  ngOnInit(): void {
    this.service.ServiceMethodGetProductList().subscribe(data => { this.ProductList = data })
    if (!sessionStorage['UserId']) {
      sessionStorage.setItem('UserId', '0');
    }
    // console.log("hey");
    // console.log(this.date.toString().substring());
    // this.date = new Date().getDate().toString();
    // this.month = new Date().getMonth().toString();
    // this.year = new Date().getFullYear().toString();
    // console.log(this.date)
    // console.log(this.month)
    // console.log(this.year)
    // console.log(this.date+" "+this.month+" "+this.year)
    // let dd = String(this.today.getDate()).padStart(2, '0')
    // let mm = String(this.today.getMonth() + 1).padStart(2, '0')
    // let y = String(this.today.getFullYear());
    // let dd1 = String(this.today.getDate() + 1).padStart(2, '0')
    // let mm1 = String(this.today.getMonth()).padStart(2, '0')
    // let y1 = String(this.today.getFullYear());
    // let currentDate = y + '-' + mm + '-' + dd;
    // let nextDate = y1 + '-' + mm1 + '-' + dd1;
    // let date1 = '2021-10-12'
    // let date2 = '2021-02-30'
    // if (date1 > date2) {
    //   console.log(date1);
    // }
    // else {
    //   console.log(date2);
    // }
  }

}
