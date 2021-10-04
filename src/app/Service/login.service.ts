import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkAPIService } from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly APIUrl= this.linkService.getLink()+"Login";
  constructor(private http : HttpClient, private linkService:LinkAPIService) { }

  ServiceMethodForgotPassword(val:any):Observable<any>{
    return this.http.post(this.linkService.getLink()+"ForgotPassword",val);
  }

  ServiceMethodUserLogin(val:any):Observable<any>{
    return this.http.post(this.APIUrl,val);
  }
  ServiceMethodLoginValidity():Observable<any[]>{
    return this.http.get<any>(this.linkService.getLink()+"Users");
  }
}