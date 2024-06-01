import { Injectable } from '@angular/core';
import {AbstractHttpComponent} from "../../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService extends AbstractHttpComponent {

  constructor(
    protected override http: HttpClient
) {
    super(http)
  }
  
  // public getMessages(): Observable<IMessage>
}
