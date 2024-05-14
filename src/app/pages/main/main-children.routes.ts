import {Routes} from "@angular/router";
import {AppRoutes} from "../../shared/const/routes";
import {authGuard} from "../../shared/guards/auth.guard";
import {MainPageChildrenRoutes} from "./main-page/main-page-children.routes";

export const MainChildrenRoutes: Routes = [
  {
    path: AppRoutes.main_page.routerPath,
    loadComponent: () => import('./main-page/main-page.component').then(component => component.MainPageComponent),
    canActivate: [authGuard],
    children: MainPageChildrenRoutes
  }
]
