import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../../shared/interfaces/core-models/i-user";
import {DefaultUserInfo} from "./utils/default-user-info";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public userInfo: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(DefaultUserInfo)


}
