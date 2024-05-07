export const userEmailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const userPasswordReg = new RegExp(/^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{8,}$/);
export const userPasswordSpecialReg = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*.\[\]{}\-_,()])(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{8,}$/);

// export const userNameReg = new RegExp(/^(?=.{1,32}$)[a-zA-Z]+(?<![_.])$/);
// export const userNameReg = new RegExp(/^[A-zА-яЁёІіЇї]{1,30}$/);

export const userNameReg = new RegExp(/^[a-z ,.'-]+$/i);
export const userPhoneNumberReg = new RegExp(/^\+?[(]?[0-9]{3}[)]?[-\s.?[0-9]{3}[-\s..[0-9]{2,5}$/im)
export const searchPhoneNumberReg = new RegExp(/^\+\d{1,12}$/);

export const requiredFieldReg = new RegExp(/\S/)
export const noWhiteSpacesReg = new RegExp(/^\S.*\S$/);

export const onlyDigitsReg = new RegExp(/^[0-9]+$/)
