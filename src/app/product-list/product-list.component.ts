import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductssService } from '../productss.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductList:any = [];

  constructor(private service:ProductssService, private router:Router) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts(){
    this.service.ServiceMethodGetProductList().subscribe(data => {this.ProductList=data})
  }
  BuyNow(id:any){
    // this.router.navigateByUrl('/ProductInfo');
    this.router.navigate(['/ProductInfo'], id);
    // this.router.navigate('ProductInfo',id);
  }

}
