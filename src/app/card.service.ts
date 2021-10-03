import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  readonly APIUrl="http://localhost:54077/api/CardDetails";

  constructor(private http:HttpClient) { }
  ServiceMethodGetCardDetails():Observable<any>{
    return this.http.get(this.APIUrl);
  }

  ServiceMethodGetCardDetail(id:number):Observable<any>{
    return this.http.get(this.APIUrl+"/"+id);
  }

}
