import {Injectable} from '@angular/core';
import {AbstractHttpComponent} from "../../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBuilding} from "../../shared/interfaces/core-models/i-building";

@Injectable({
  providedIn: 'root'
})
export class BuildingsApiService extends AbstractHttpComponent {

  constructor(
    protected override http: HttpClient
  ) {
    super(http)
  }

  public createBuilding(building: any): Observable<IBuilding> {
    return this.httpPostRequest<IBuilding>('/buildings', building)
  }

  public getBuildings(): Observable<IBuilding[]> {
    return this.httpGetRequest<IBuilding[]>('/buildings')
  }

  public getBuilding(id: number): Observable<IBuilding> {
    return this.httpGetRequest<IBuilding>(`/buildings/${id}`)
  }

  public editBuilding(id: number, building: any): Observable<IBuilding> {
    return this.httpPatchRequest(`/buildings/${id}`, building)
  }

  public deleteBuilding(id: number): Observable<void> {
    return this.httpDeleteRequest('/buildings/')
  }
}
