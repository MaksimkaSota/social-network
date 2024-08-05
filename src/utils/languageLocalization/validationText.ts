import type { LanguageLocalizationType } from '../types/common';

export const validationText: LanguageLocalizationType = {
  email: {
    ru: 'Неверный адрес почты',
    en: 'Invalid email address',
  },
  requiredEmail: {
    ru: 'Почта обязательна для ввода',
    en: 'Required email address',
  },
  minPassword: {
    ru: 'Должен быть не менее 5 символов',
    en: 'Must be not less than 5 symbols',
  },
  maxPassword: {
    ru: 'Должен быть не более 20 символов',
    en: 'Must be not more than 20 symbols',
  },
  requiredPassword: {
    ru: 'Пароль обязателен для ввода',
    en: 'Required password',
  },
  requiredCaptcha: {
    ru: 'Символы с картинки обязательны для ввода',
    en: 'Required captcha',
  },
  minName: {
    ru: 'Должно быть не менее 3 символов',
    en: 'Must be not less than 3 symbols',
  },
  maxName: {
    ru: 'Должно быть не более 30 символов',
    en: 'Must be not more than 30 symbols',
  },
  requiredName: {
    ru: 'Полное имя обязательно для ввода',
    en: 'Required full name',
  },
};
