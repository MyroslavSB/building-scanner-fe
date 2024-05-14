import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AppRoutes} from "../../../../../shared/const/routes";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  public appRoutes = AppRoutes
}
