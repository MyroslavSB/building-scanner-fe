import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUserInfo} from "./utils/i-user-info";
import {DefaultUserInfo} from "./utils/default-user-info";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public userInfo: BehaviorSubject<IUserInfo> = new BehaviorSubject<IUserInfo>(DefaultUserInfo)


}
