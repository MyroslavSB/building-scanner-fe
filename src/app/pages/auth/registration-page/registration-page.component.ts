import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
  public readonly regSteps = ERegSteps

  public regStep: ERegSteps = ERegSteps.ENTER_EMAIL

  public emailControl: FormControl
  public passwordForm: FormGroup
  public userInfoForm: FormGroup

  constructor(
    private cdRef: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForms()
  }

  private initForms(): void {
    this.emailControl = new FormControl('', [
      Validators.required,
      CustomValidators.emailValidator
    ])

    this.passwordForm = this.fb.group({
      password_1: ['', [
        Validators.required,
        CustomValidators.passwordValidator
      ]],
      password_2: ['', [
        Validators.required
      ]]
    }, {validators: [this.passwordsValidator]})

    this.userInfoForm = this.fb.group({
      first_name: ['', [
        Validators.required,
        CustomValidators.firstNameValidator
      ]],
      last_name: ['', [
        Validators.required,
        CustomValidators.lastNameValidator
      ]],
      phone_number: ['', [
        Validators.required,
        CustomValidators.phoneNumberValidator
      ]],
    })
  }

  public verifyEmail(): void {
    this.regStep = this.regSteps.SETUP_PASSWORD
    this.cdRef.detectChanges()
  }

  public setupPassword(): void {
    this.regStep = this.regSteps.CREATE_PROFILE
    this.cdRef.detectChanges()
  }

  public registerUser(): void {
    // this.regStep = this.regSteps.SETUP_PASSWORD
    // this.cdRef.detectChanges()
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

