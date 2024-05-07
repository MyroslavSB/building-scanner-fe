import { Routes } from '@angular/router';
import {AppRoutes} from "./shared/const/routes";
import {authGuard} from "./shared/guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/main/main-page/main-page.component').then(comp => comp.MainPageComponent),
    pathMatch: 'full',
    canActivate: [authGuard]
  },
  {
    path: AppRoutes.login.routerPath,
    loadComponent: () => import('./pages/auth/login-page/login-page.component').then(comp => comp.LoginPageComponent)
  },
  {
    path: AppRoutes.register.routerPath,
    loadComponent: () => import('./pages/auth/registration-page/registration-page.component').then(comp => comp.RegistrationPageComponent)
  },

];
