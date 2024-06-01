import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Params} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {ELocalStorageItems} from "../../services/local-storage/utils/e-local-storage-items";

export class AbstractHttpComponent {
  constructor(
    protected http: HttpClient
  ) {
  }

  protected baseURL = 'http://localhost:3000/api';

  public httpPostRequest<ResponseType>(
    url: any,
    body: any = {},
    params: Params = {},
  ): Observable<ResponseType> {
    const headers = this.getHttpHeaders();

    return this.http.post<ResponseType>(this.baseURL + url, body, {headers, params});
  }

  public httpGetRequest<ResponseType>(url: any, params: Params = {}): Observable<ResponseType> {
    const headers = this.getHttpHeaders();

    return this.http.get<ResponseType>(this.baseURL + url, {headers, params, withCredentials: true});
  }

  public httpDeleteRequest(url: any, body: any | null = null, params: Params = {}): Observable<void> {
    const headers = this.getHttpHeaders();

    return this.http.delete<void>(this.baseURL + url, {headers, body, params});
  }

  public httpPatchRequest<ResponseType>(url: any, body: any): Observable<ResponseType> {
    const headers = this.getHttpHeaders();

    return this.http.patch<ResponseType>(this.baseURL + url, body, {headers});
  }

  protected getHttpHeaders(): any {
    return new HttpHeaders()
      .set('Authorization', `JWT ${localStorage.getItem(ELocalStorageItems.ACCESS_TOKEN)}`)
  }
}
