import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TransactionHistories } from './Model/TransactionHistories';
//import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ProductssService {

  pid!: number;
  amount!: number;
  tenure!: number;
  method!: string;
  pname!: string;

  constructor(private http:HttpClient) { }

  ServiceMethodGetProductList(): Observable<any[]>{
    return this.http.get<any>('http://localhost:26681/api/Products');
  }

  ServiceMethodGetProductByID(id:number):Observable<any>{
    return this.http.get('http://localhost:26681/api/Products/'+String(id));
  }

  // ServiceMethodGetTransactionDetails(){
  //   return (this.method, this.pid, this.amount, this.tenure)
  // }
  ServiceMethodGetMethodName(){
    return this.method
  }
  ServiceMethodGetSelectedPid(){
    return this.pid
  }
  ServiceMethodGetAmount(){
    return this.amount
  }
  ServiceMethodGetTenure(){
    return this.tenure
  }
  ServiceMethodGetPname(){
    return this.pname;
  }

  ServiceMethodSetTransactionDetails(methodtype:string,pid:number, pname:string,amt:number, tenure:number){
    this.method = methodtype;
    this.pid = pid;
    this.amount = amt;
    this.tenure = tenure; 
    this.pname = pname;   
  }

}
