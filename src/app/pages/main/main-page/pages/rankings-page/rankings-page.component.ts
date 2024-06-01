import {Component} from '@angular/core';
import {EUserRoles} from "../../../../../services/user-info/utils/e-user-roles";
import {NgForOf} from "@angular/common";
import {IUser} from "../../../../../shared/interfaces/core-models/i-user";

@Component({
  selector: 'app-rankings-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './rankings-page.component.html',
  styleUrl: './rankings-page.component.scss'
})
export class RankingsPageComponent {

  private userRoles = EUserRoles
  public users: IUser[] = []
}
