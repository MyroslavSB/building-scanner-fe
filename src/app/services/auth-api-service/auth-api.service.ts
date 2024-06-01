import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITokenResponse} from "./utils/interfaces/i-token-response";
import {AbstractHttpComponent} from "../../shared/abstract/abstract-http-component";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends AbstractHttpComponent {

  constructor(
    protected override http: HttpClient
  ) {
    super(http)
  }

  public login(body: any): Observable<ITokenResponse> {
    return this.http.post<ITokenResponse>(`${this.baseURL}/auth/login`, body)
  }

  public register(body: any): Observable<ITokenResponse>{
    return this.http.post<ITokenResponse>(`${this.baseURL}/auth/register`, body)

  }
}
