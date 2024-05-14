import { Routes } from '@angular/router';
import {AppRoutes} from "./shared/const/routes";
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
  ...MainChildrenRoutes,
  {
    path: '**',
    redirectTo: AppRoutes.home_page.routerPath
  }
];
