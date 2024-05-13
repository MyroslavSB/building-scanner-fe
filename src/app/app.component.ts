import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {BaseIconsRegistryService} from "./services/base-icons-registry.service";
import {completeIconSet} from "../base-icons/base-icons";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
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
