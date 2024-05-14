import { Component } from '@angular/core';
import {UserInfoService} from "../../../../../services/user-info/user-info.service";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

  constructor(
    private userInfo: UserInfoService
  ) {
  }


}
