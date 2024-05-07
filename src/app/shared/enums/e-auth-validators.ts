import {
  noWhiteSpacesReg,
  onlyDigitsReg,
  requiredFieldReg, searchPhoneNumberReg,
  userEmailReg,
  userNameReg,
  userPasswordReg,
  userPasswordSpecialReg,
  userPhoneNumberReg
} from "../const/reg-exp-validators";


export const REGISTRATION_FORM_VALIDATORS_CONST = {
  userEmailPattern: userEmailReg,
  userPasswordPattern: userPasswordReg,
  userPasswordSpecialPattern: userPasswordSpecialReg,
  userName: userNameReg,
  userPhoneNumberPattern: userPhoneNumberReg,
  searchPhoneNumberPattern: searchPhoneNumberReg,
  requiredFieldPattern: requiredFieldReg,
  noWhiteSpacesPattern: noWhiteSpacesReg,
  onlyDigitsPattern: onlyDigitsReg
};
