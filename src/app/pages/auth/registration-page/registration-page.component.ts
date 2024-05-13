import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ERegSteps} from "../../../shared/enums/e-reg-steps";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet} from "@angular/common";
import {SbButtonComponent} from "../../../shared/components/sb-button/sb-button.component";
import {SbInputComponent} from "../../../shared/components/sb-input/sb-input.component";
import {CustomValidators} from "../../../shared/const/validators";
import {EFormErrors} from "../../../shared/enums/e-form-errors";
import {BaseIconComponent} from "../../../shared/components/base-icon/base-icon.component";
import {AuthApiService} from "../../../services/auth-api-service/auth-api.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {LocalStorageService} from "../../../services/local-storage.service";
import {ELocalStorageItems} from "../../../shared/enums/e-local-storage-items";
import {Router} from "@angular/router";
import {AppRoutes} from "../../../shared/const/routes";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    SbButtonComponent,
    SbInputComponent,
    BaseIconComponent,
    NgIf,
    NgTemplateOutlet
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationPageComponent implements OnInit {
  private destroyRef = inject(DestroyRef)

  public readonly regSteps = ERegSteps

  public regStep: ERegSteps = ERegSteps.ENTER_INFO

  public infoForm: FormGroup
  public passwordForm: FormGroup

  private storageItems = ELocalStorageItems
  private appRoutes = AppRoutes

  constructor(
    private cdRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private authAPI: AuthApiService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initForms()
  }

  private initForms(): void {
    this.infoForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        CustomValidators.emailValidator
      ]),
      username: new FormControl('', [
        Validators.required,
      ]),
    })

    this.passwordForm = this.fb.group({
      password_1: ['', [
        Validators.required,
        CustomValidators.passwordValidator
      ]],
      password_2: ['', [
        Validators.required
      ]]
    }, {validators: [this.passwordsValidator]})
  }

  public verifyEmail(): void {
    this.regStep = this.regSteps.SETUP_PASSWORD
    this.cdRef.detectChanges()
  }

  public setupPassword(): void {
    this.cdRef.detectChanges()
  }

  public registerUser(): void {
    const body = {
      "email": "testuser@gmail.com",
      "password": "Student2008&",
      "username": "TestUsername"
    }
    this.authAPI.register(body)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(token => {
        this.localStorage.setItem(this.storageItems.ACCESS_TOKEN, token.access_token)
        this.router.navigate([this.appRoutes.main_page])
      })
  }

  public getControl(form: FormGroup, controlName: string): FormControl {
    return form?.get(controlName) as FormControl;
  }

  private passwordsValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get('password_1')?.value;
    const confirmPass = group.get('password_2')?.value;
    if (pass && confirmPass) {
      return pass === confirmPass ? null : {message: EFormErrors.PASSWORD_SAME_ERROR}
    }

    return null;
  }
}

