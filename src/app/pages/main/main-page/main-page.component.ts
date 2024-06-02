import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../../../shared/components/navbar/navbar.component";
import {AuthApiService} from "../../../services/auth-api-service/auth-api.service";
import {UserInfoService} from "../../../services/user-info/user-info.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

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
export class MainPageComponent implements OnInit {
  private destroyRef$ = inject(DestroyRef)

  constructor(
    private authAPI: AuthApiService,
    private userInfoService: UserInfoService
  ) {
  }

  ngOnInit() {
    this.getUserInfo()
  }

  private getUserInfo(): void {
    this.authAPI.getUserInfo()
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe(user => {
        this.userInfoService.userInfo.next(user)
      })
  }
}
