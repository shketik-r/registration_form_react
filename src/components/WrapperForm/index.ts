export const validatorLogin = (value: string) => {
  const REGEXP = /^([a-zA-Zа-яА-я]{2,20})$/;

  if (value === "") {
    return "Заполните поле";
  }
  if (REGEXP.test(value)) {
    return '';
  } else {
    return "Логин должен содержать от 2 символов (буквы)";
  }
};

export const validatorEmail = (value: string) => {
  const REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (value === "") {
    return "Заполните поле";
  }
  if (REGEXP.test(value)) {
    return '';
  } else {
    return "Некорректно введен email";
  }
};
export const validatorPassword = (value: string) => {
  const REGEXP = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (value === "") {
    return "Заполните поле";
  }
  if (REGEXP.test(value)) {
    return '';
  } else {
    return "Пароль должен содержать от 8 символов (буквы и цифры)";
  }
};
export const validatorConfimPassword = (pass: string, confirmPass:string) => {
  if (pass === confirmPass) {
    return '';
  } else {
    return "Пароли не совпадают";
  }
};
