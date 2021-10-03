import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkAPIService } from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  readonly APIUrl= this.linkService.getLink()+"TransactionHistories/";
  constructor(private http : HttpClient, private linkService:LinkAPIService) { }

  ServiceMethodGetTransactionHistories():Observable<any>{
    return this.http.get(this.APIUrl);
  }
  //TransactionHistory
  ServiceMethodGetTransactionHistory(id:number):Observable<any>{
    return this.http.get(this.APIUrl+"/"+id);
  }
}
