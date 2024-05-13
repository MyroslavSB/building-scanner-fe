import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITokenResponse} from "./utils/interfaces/i-token-response";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private http: HttpClient
  ) { }

  public login(body: any): Observable<ITokenResponse> {
    return this.http.post<ITokenResponse>('http://localhost:3000/auth/login', body)
  }

  public register(body: any): Observable<ITokenResponse>{
    return this.http.post<ITokenResponse>('http://localhost:3000/auth/register', body)

  }
}
