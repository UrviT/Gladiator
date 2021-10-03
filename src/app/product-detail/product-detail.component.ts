import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductssService } from '../productss.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number = 1;
  SelectedProduct: any;
  // SelectedProduct: {
  //   ID: number,
  //   PName: string,
  //   Description: string,
  //   Cost: number,
  //   ImgPath: string
  // }
  tenure:number = 3;

  constructor( private service:ProductssService, private route:ActivatedRoute, private routing:Router) {
    // this.id = Number(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.id = Number(params.get('id'));
    });
    this.service.ServiceMethodGetProductByID(this.id).subscribe(data => this.SelectedProduct=data);
  }

  paymentRedirect(prodID:number, amount:number){
    this.service.ServiceMethodSetTransactionDetails(prodID,amount,this.tenure);
    this.routing.navigateByUrl("/Payment");
  }
}
