import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Params} from "@angular/router";
import {Inject} from "@angular/core";
import {DOCUMENT} from "@angular/common";

export class AbstractHttpComponent {
  constructor(
    @Inject(DOCUMENT) protected document: Document,
    protected http: HttpClient,
  ) {
  }

  protected baseURL = 'localhost:3000';

  public httpPostRequest(
    url: any,
    body: any = {},
    params: Params = {},
    isTracking: boolean = false
  ): Observable<any> {
    const headers = this.getHttpHeaders();

    if (isTracking) {
      return this.http.post<any>(this.baseURL + url, body, {
        headers,
        params,
        reportProgress: true,
        observe: 'events',
      });
    }

    return this.http.post<any>(this.baseURL + url, body, {headers, params});
  }

  public httpGetRequest(url: any, params: Params = {}): Observable<any> {
    const headers = this.getHttpHeaders();

    return this.http.get<any>(this.baseURL + url, {headers, params});
  }

  public httpDeleteRequest(url: any, body: any | null = null, params: Params = {}): Observable<any> {
    const headers = this.getHttpHeaders();

    return this.http.delete<any>(this.baseURL + url, {headers, body, params});
  }

  public httpPatchRequest(url: any, body: any): Observable<any> {
    const headers = this.getHttpHeaders();

    return this.http.patch<any>(this.baseURL + url, body, {headers});
  }

  protected getHttpHeaders(): any {
    return new HttpHeaders()
      .set('Authorization', `JWT ${localStorage.getItem('access_token')}`)
  }
}
