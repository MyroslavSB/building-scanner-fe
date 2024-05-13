import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AppRoutes} from "../../../shared/const/routes";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  public appRoutes = AppRoutes
}
