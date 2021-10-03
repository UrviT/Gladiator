import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../Model/Users'
import { LinkAPIService } from './link-api.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private linkService:LinkAPIService) { }

  readonly APIUrl= this.linkService.getLink()+"Users";
  // readonly APIUrl="http://localhost:54077/api/Users/";
  // readonly APIUrlProduct="http://localhost:54077/api/Products/"
  // readonly APIUrlTrans="http://localhost:54077/api/TransactionHistories/"
  list : Users[] | undefined;
  user1 : Users = new Users();
  formData : Users = new Users();
  Id = 5;
  //Users
  ServiceMethodGetUsers():Observable<any>{
    return this.http.get(this.APIUrl);
  }
  ServiceMethodPutUser(id:number,userUpd:Users){
    return this.http.put(`${this.APIUrl}/${id}`, this.formData);
  }
  ServiceMethodGetUser(ID:number):Observable<any>{
    return this.http.get(this.APIUrl+"/"+ID);
  }
  ServiceMethodDeleteUser(user_id:number):Observable<any>{
    return this.http.delete<Users>(`${this.APIUrl}/${user_id}`);
  }
  refreshList() {
    this.http.get(this.APIUrl)
      .toPromise()
      .then(res =>this.list = res as Users[]);
  }
}
