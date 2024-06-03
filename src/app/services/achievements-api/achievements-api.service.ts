import {Injectable} from '@angular/core';
import {AbstractHttpComponent} from "../../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAchievement} from "../../shared/interfaces/core-models/i-achievement";

@Injectable({
  providedIn: 'root'
})
export class AchievementsApiService extends AbstractHttpComponent {

  constructor(
    protected override http: HttpClient
  ) {
    super(http)
  }

  public getAchievements(): Observable<IAchievement[]> {
    return this.httpGetRequest('/achievements')
  }

}
