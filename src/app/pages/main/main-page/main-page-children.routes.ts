import {Routes} from "@angular/router";
import {AppRoutes} from "../../../shared/const/routes";

export const MainPageChildrenRoutes: Routes = [
  {
    path: AppRoutes.home_page.routerPath,
    loadComponent: () => import('./pages/home-page/home-page.component').then(component => component.HomePageComponent)
  },
  {
    path: AppRoutes.buildings_page.routerPath,
    loadComponent: () => import('./pages/buildings-page/buildings-page.component').then(component => component.BuildingsPageComponent)
  },
  {
    path: AppRoutes.rankings_page.routerPath,
    loadComponent: () => import('./pages/rankings-page/rankings-page.component').then(component => component.RankingsPageComponent)
  },
  {
    path: AppRoutes.profile_page.routerPath,
    loadComponent: () => import('./pages/profile-page/profile-page.component').then(component => component.ProfilePageComponent)
  }
]
