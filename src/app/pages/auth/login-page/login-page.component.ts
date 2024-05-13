import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SbInputComponent} from "../../../shared/components/sb-input/sb-input.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SbButtonComponent} from "../../../shared/components/sb-button/sb-button.component";
cimport {AuthApiService} from "../../../services/auth-api.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    SbInputComponent,
    SbButtonComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authAPI: AuthApiService
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
      .subscribe()

  }

  public getControl(form: FormGroup, controlName: string): FormControl {
    return form?.get(controlName) as FormControl;
  }
}
