import { Component } from '@angular/core';
import {NavbarItems} from "./utils/navbar-items";
import {INavbarItem} from "./utils/i-navbar-item";
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public readonly navbarItems: INavbarItem[] = NavbarItems

}
