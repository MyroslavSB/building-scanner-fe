import { Component } from '@angular/core';
import {UserInfoService} from "../../../../../services/user-info/user-info.service";
import {EUserRoles} from "../../../../../services/user-info/utils/e-user-roles";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

  constructor(
    private userInfo: UserInfoService
  ) {
  }


  user = {
    role: EUserRoles.ADMIN, // Replace with actual user role
    email: 'user@example.com', // Replace with actual user email
    username: 'username123' // Replace with actual user username
  };

  visits = [
    'Building One', 'Building Two', 'Building Three' // Replace with actual visit data
  ];

  achievements = [
    'Achievement One', 'Achievement Two', 'Achievement Three' // Replace with actual achievement data
  ];

  createdBuildings = [
    'Building A', 'Building B', 'Building C' // Replace with actual created buildings data
  ];
}
