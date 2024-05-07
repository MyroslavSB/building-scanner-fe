import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LocalStorageService} from "../../services/local-storage.service";
import {ELocalStorageItems} from "../enums/e-local-storage-items";
import {AppRoutes} from "../const/routes";

export const authGuard: CanActivateFn = (route, state) => {
  const localStorageService = inject(LocalStorageService)
  const router = inject(Router)

  const access_token = localStorageService.getItem(ELocalStorageItems.ACCESS_TOKEN)

  if (!access_token) {
    router.navigateByUrl(AppRoutes.login.fullPath)
    return false
  }

  return true
};
