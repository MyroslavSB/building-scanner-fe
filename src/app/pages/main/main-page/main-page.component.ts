import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {MainChildrenRoutes} from "../main-children.routes";
import {NavbarComponent} from "../../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
