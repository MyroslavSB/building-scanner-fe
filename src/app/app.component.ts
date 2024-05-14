import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BaseIconsRegistryService} from "./services/base-icons-registry.service";
import {completeIconSet} from "../base-icons/base-icons";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {UserInfoService} from "./services/user-info/user-info.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'building-scanner-fe';

  constructor(
    public iconsRegistry: BaseIconsRegistryService
  ) {
    this.iconsRegistry.registerIcons(completeIconSet)
  }
}
