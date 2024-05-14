import {INavbarItem} from "./i-navbar-item";
import {AppRoutes} from "../../../const/routes";

export const NavbarItems: INavbarItem[] = [
  {
    text: 'Home',
    path: AppRoutes.home_page.fullPath
  },
  {
    text: 'Buildings',
    path: AppRoutes.buildings_page.fullPath
  },
  {
    text: 'Rankings',
    path: AppRoutes.rankings_page.fullPath
  },
  {
    text: 'Profile',
    path: AppRoutes.profile_page.fullPath
  },
]
