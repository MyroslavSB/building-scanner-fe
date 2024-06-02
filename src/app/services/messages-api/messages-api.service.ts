import { Injectable } from '@angular/core';
import {AbstractHttpComponent} from "../../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {IMessage} from "../../shared/interfaces/core-models/i-message";
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

  public getMessages(building_id: number): Observable<IMessage[]> {
    return this.httpGetRequest('/messages', {building_id})
  }

  public sendMessage(building_id: number, text: string): Observable<IMessage> {
    return this.httpPostRequest('/messages', {building_id, text})
  }


}
