import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
//import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ProductssService {

  pid!: number;
  amount!: number;
  tenure!: number;

  constructor(private http:HttpClient) { }

  ServiceMethodGetProductList(): Observable<any[]>{
    return this.http.get<any>('http://localhost:26681/api/Products');
  }

  ServiceMethodGetProductByID(id:number):Observable<any>{
    return this.http.get('http://localhost:26681/api/Products/'+String(id));
  }

  ServiceMethodGetTransactionDetails(){
    return (this.pid, this.amount,this.tenure)
  }
  ServiceMethodSetTransactionDetails(pid:number,amt:number, tenure:number){
    this.pid = pid;
    this.amount = amt;
    this.tenure = tenure;    
  }
}
