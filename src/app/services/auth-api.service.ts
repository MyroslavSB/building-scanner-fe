import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private http: HttpClient
  ) { }

  public login(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/auth/login', body)
  }

  public register(body: any): Observable<any>{
    return this.http.post('http://localhost:3000/auth/register', body)

  }
}
