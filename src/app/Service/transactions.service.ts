import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionHistories } from '../Model/TransactionHistories';
import { LinkAPIService } from './link-api.service';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json' 
  })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  readonly APIUrl= this.linkService.getLink()+"TransactionHistories";
  constructor(private http : HttpClient, private linkService:LinkAPIService) { }

  ServiceMethodGetTransactionHistories():Observable<any>{
    return this.http.get(this.APIUrl);
  }
  //TransactionHistory
  ServiceMethodGetTransactionHistory(id:number):Observable<any>{
    return this.http.get(this.APIUrl+"/"+id);
  }

  ServiceMethodPutTransactionDetails(id:number,transObj:TransactionHistories){
    return this.http.put<TransactionHistories>(this.APIUrl+"/"+String(id),transObj,httpOptions);
  }

  // ServiceMethodPostTransactionDetails(transObj:TransactionHistories):Observable<any>{
  //   return this.http.post(this.APIUrl,transObj);
  // }

  ServiceMethodPostTransactionDetails(transObj:TransactionHistories):Observable<any>{
    return this.http.post<TransactionHistories>(this.APIUrl,transObj, httpOptions);
  }

}
