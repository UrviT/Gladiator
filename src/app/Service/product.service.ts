import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkAPIService } from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly APIUrl= this.linkService.getLink()+"Products";
  constructor(private http : HttpClient, private linkService:LinkAPIService) { }

  ServiceMethodGetProducts():Observable<any>{
    return this.http.get(this.APIUrl);
  }
  ServiceMethodGetProduct(id:number):Observable<any>{
    return this.http.get(this.APIUrl+"/"+id);
  }
}
