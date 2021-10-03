import { Injectable } from '@angular/core';
import {CardDetails} from '../Model/CardDetails';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { LinkAPIService } from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http : HttpClient, private linkService:LinkAPIService) { }
  readonly APIUrl= this.linkService.getLink()+"CardDetails";
  // readonly APIUrls="http://localhost:54077/api/CardDetails/";

  ServiceMethodGetCardDetails():Observable<any>{
    return this.http.get(this.APIUrl);
  }

  ServiceMethodGetCardDetail(id:number):Observable<any>{
    return this.http.get(this.APIUrl+"/"+id);
  }

}
