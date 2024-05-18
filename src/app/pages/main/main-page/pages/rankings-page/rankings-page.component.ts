import {Component} from '@angular/core';
import {IUser} from "../../../../../shared/interfaces/core-models/i-user";
import {EUserRoles} from "../../../../../services/user-info/utils/e-user-roles";
import {NgForOf} from "@angular/common";

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
  public users: IUser[] = [
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},
    {id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},{id: 2, role: this.userRoles.USER, email: 'admin@example.com', username: 'admin', visit_count: 50},
    {id: 3, role: this.userRoles.USER, email: 'user2@example.com', username: 'user2', visit_count: 20},
    {id: 1, role: this.userRoles.USER, email: 'user1@example.com', username: 'user1', visit_count: 10},



  ]
}
