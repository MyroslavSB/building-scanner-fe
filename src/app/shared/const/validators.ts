import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {REGISTRATION_FORM_VALIDATORS_CONST} from "../enums/e-auth-validators";
import {EFormErrors} from "../enums/e-form-errors";

export class CustomValidators {
  static firstNameValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.match(REGISTRATION_FORM_VALIDATORS_CONST.userName)) {
      return null;
    } else {
      return {
        message: EFormErrors.NAME_INVALID_ERROR
      }
    }
  }

  static lastNameValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.match(REGISTRATION_FORM_VALIDATORS_CONST.userName)) {
      return null;
    } else {
      return {
        message: EFormErrors.SURNAME_INVALID_ERROR
      }
    }
  }

  static passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.match(REGISTRATION_FORM_VALIDATORS_CONST.userPasswordPattern)) {
      return null;
    } else {
      return {
        message: EFormErrors.PASSWORD_INVALID_ERROR
      }
    }
  }

  static emailValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.match(REGISTRATION_FORM_VALIDATORS_CONST.userEmailPattern)) {
      return null;
    } else {
      return {
        message: EFormErrors.EMAIL_INVALID_ERROR
      }
    }
  }

  static phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.match(REGISTRATION_FORM_VALIDATORS_CONST.userPhoneNumberPattern)) {
      return null
    } else {
      return {
        message: EFormErrors.PHONE_INVALID_ERROR
      }
    }
  }

}
