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

  ProductList: any=[];
  constructor(private service:ProductssService, private route:Router) { }

  ngOnInit(): void {
    this.service.ServiceMethodGetProductList().subscribe(data => {this.ProductList=data})
    if(!sessionStorage['UserId']){
      sessionStorage.setItem('UserId','0');
    }
  }

}
