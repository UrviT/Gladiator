import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  ServiceMethodCustomerPayment (val: any) {
    return this.http.post('http://localhost:55483/api/TransactionHistories',val);
  }   
}
