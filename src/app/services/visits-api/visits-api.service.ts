import { Injectable } from '@angular/core';
import {AbstractHttpComponent} from "../../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IVisit} from "../../shared/interfaces/core-models/i-visit";

@Injectable({
  providedIn: 'root'
})
export class VisitsApiService extends AbstractHttpComponent {

  constructor(
    protected override http: HttpClient
  ) {
    super(http)
  }

  public visitBuilding(building_id: number): Observable<IVisit> {
    return this.httpPostRequest('/visits', {building_id})
  }

  public getVisits(): Observable<IVisit[]> {
    return this.httpGetRequest('/visits')
  }


}
