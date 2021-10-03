import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  ServiceMethodCustomerRegistration(val:any): Observable<any>{
    return this.http.post('http://localhost:26681/api/Users',val);;
  }
  ServiceMethodCardRegistration(val:any): Observable<any>{
    return this.http.post('http://localhost:26681/api/CardDetails',val);;
  }
}
