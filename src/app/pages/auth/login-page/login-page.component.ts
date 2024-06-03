import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {SbInputComponent} from "../../../shared/components/sb-input/sb-input.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SbButtonComponent} from "../../../shared/components/sb-button/sb-button.component";
import {AuthApiService} from "../../../services/auth-api-service/auth-api.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {ELocalStorageItems} from "../../../services/local-storage/utils/e-local-storage-items";
import {Router, RouterLink} from "@angular/router";
import {AppRoutes} from "../../../shared/const/routes";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    SbInputComponent,
    SbButtonComponent,
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef)

  public loginForm: FormGroup

  private localStorageKeys = ELocalStorageItems
  public appRoutes = AppRoutes

  constructor(
    private fb: FormBuilder,
    private authAPI: AuthApiService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initForm()
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,

      ]],
      password: ['', [
        Validators.required,

      ]]
    })
  }

  public login(): void {
    this.authAPI.login(this.loginForm.getRawValue())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(token => {
        this.localStorage.setItem(this.localStorageKeys.ACCESS_TOKEN, token.access_token)
        this.router.navigate([this.appRoutes.home_page.fullPath])
      })

  }

  public getControl(form: FormGroup, controlName: string): FormControl {
    return form?.get(controlName) as FormControl;
  }
}
