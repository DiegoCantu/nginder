import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandommUserService {

  protected api:string = "https://randomuser.me/api/?results=";
  constructor(protected httpClient: HttpClient) { 

  }

  getRandomPerson(): Observable<any>{
    return this.httpClient.get(this.api);
  }
  
}
