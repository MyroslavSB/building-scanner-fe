import {Routes} from "@angular/router";
import {AppRoutes} from "../../../shared/const/routes";
import {authGuard} from "../../../shared/guards/auth.guard";

export const MainChildrenRoutes: Routes = [
  {
    path: AppRoutes.buildings_page.routerPath,
    loadComponent: () => import('./buildings-page/buildings-page.component').then(component => component.BuildingsPageComponent),
    canActivate: [authGuard]
  }
]
