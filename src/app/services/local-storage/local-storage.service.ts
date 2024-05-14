import { Injectable } from '@angular/core';
import {ELocalStorageItems} from "./utils/e-local-storage-items";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getItem(item_key: ELocalStorageItems): string {
    return localStorage.getItem(item_key)
  }

  public setItem(item_key: ELocalStorageItems, value: string): void {
    localStorage.setItem(item_key, value)
  }

}
