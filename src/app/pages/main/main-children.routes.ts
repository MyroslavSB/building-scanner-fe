import {Routes} from "@angular/router";
import {AppRoutes} from "../../shared/const/routes";
import {authGuard} from "../../shared/guards/auth.guard";

export const MainChildrenRoutes: Routes = [
  {
    path: AppRoutes.buildings_page.routerPath,
    loadComponent: () => import('./buildings-page/buildings-page.component').then(component => component.BuildingsPageComponent),
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.rankings_page.routerPath,
    loadComponent: () => import('./rankings-page/rankings-page.component').then(component => component.RankingsPageComponent),
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.profile_page.routerPath,
    loadComponent: () => import('./profile-page/profile-page.component').then(component => component.ProfilePageComponent),
    canActivate: [authGuard]
  }
]
