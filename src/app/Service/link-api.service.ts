import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkAPIService {

  readonly APIlink = "http://localhost:26681/api/";
  constructor() { }

  getLink(){
    return this.APIlink;
  }
}
