import {Injectable} from '@angular/core';
import {AbstractHttpComponent} from "../../shared/abstract/abstract-http-component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../shared/interfaces/core-models/i-user";
import {ERankingOptions} from "../../shared/enums/e-ranking-options";

@Injectable({
  providedIn: 'root'
})
export class RankingsApiService extends AbstractHttpComponent {

  constructor(
    protected override http: HttpClient
  ) {
    super(http)
  }

  public getRankedUsers(sortBy: ERankingOptions = ERankingOptions.VISITS): Observable<IUser[]> {
return this.httpGetRequest('/rankings/', {sortBy})
  }

}
