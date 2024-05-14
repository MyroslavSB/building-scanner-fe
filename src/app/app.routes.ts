import { Routes } from '@angular/router';
import {AppRoutes} from "./shared/const/routes";
import {authGuard} from "./shared/guards/auth.guard";
import {MainChildrenRoutes} from "./pages/main/main-children.routes";

export const routes: Routes = [
  {
    path: AppRoutes.login.routerPath,
    loadComponent: () => import('./pages/auth/login-page/login-page.component').then(comp => comp.LoginPageComponent)
  },
  {
    path: AppRoutes.register.routerPath,
    loadComponent: () => import('./pages/auth/registration-page/registration-page.component').then(comp => comp.RegistrationPageComponent)
  },
  {
    path: AppRoutes.main_page.routerPath,
    loadComponent: () => import('./pages/main/main-page/main-page.component').then(comp => comp.MainPageComponent),
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  ...MainChildrenRoutes,
  {
    path: '**',
    redirectTo: AppRoutes.main_page.routerPath
  }
];
