import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userDetails } from '../app/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  constructor( private http:HttpClient ) { }
  readonly APIUrl="http://localhost:26681/api/Users";
  list : userDetails[] | undefined;
  user1 : userDetails = new userDetails();
  ServiceMethodGetUsers():Observable<any>{
    return this.http.get(this.APIUrl);
  }
  ServiceMethodGetUserById(user_id:number):Observable<any>{
    return this.http.get(`${this.APIUrl}/${user_id}`);
  }
  ServiceMethodGetProductByID(id:number):Observable<any>{
    return this.http.get('http://localhost:26681/api/Products/'+String(id));
  }

  ServiceMethodPutuserDetails(id:number, user1:userDetails):Observable<userDetails>{
    return this.http.put<userDetails>(this.APIUrl+"/"+String(id),user1);
  }

  // ServiceMethodPutuserDetails(hero: Hero): Observable<Hero> {
  //   return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('updateHero', hero))
  //     );
  // }

  // ServiceMethodPutuserDetails(id:number, user:any){
  //   return this.http.put(this.APIUrl+"/"+String(id),user);
  // }

  ServiceMethodDeleteUser(user_id:number):Observable<any>{
    return this.http.delete<userDetails>(`${this.APIUrl}/${user_id}`);
  }

  refreshList() {
    this.http.get(this.APIUrl)
      .toPromise()
      .then(res =>this.list = res as userDetails[]);
  }  
}
