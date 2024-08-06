import type { LanguageLocalizationType } from '../types/common';

export const validationText: LanguageLocalizationType = {
  email: {
    en: 'Invalid email address',
    ru: 'Неверный адрес почты',
  },
  requiredEmail: {
    en: 'Required email address',
    ru: 'Почта обязательна для ввода',
  },
  minPassword: {
    en: 'Must be not less than 5 symbols',
    ru: 'Должен быть не менее 5 символов',
  },
  maxPassword: {
    en: 'Must be not more than 20 symbols',
    ru: 'Должен быть не более 20 символов',
  },
  requiredPassword: {
    en: 'Required password',
    ru: 'Пароль обязателен для ввода',
  },
  requiredCaptcha: {
    en: 'Required captcha',
    ru: 'Символы с картинки обязательны для ввода',
  },
  minName: {
    en: 'Must be not less than 3 symbols',
    ru: 'Должно быть не менее 3 символов',
  },
  maxName: {
    en: 'Must be not more than 30 symbols',
    ru: 'Должно быть не более 30 символов',
  },
  requiredName: {
    en: 'Required full name',
    ru: 'Полное имя обязательно для ввода',
  },
  maxPublication: {
    en: 'Must be not more than 100 symbols',
    ru: 'Должно быть не более 100 символов',
  },
  requiredPublication: {
    en: 'Required publication',
    ru: 'Публикация обязательна для ввода',
  },
  maxChatText: {
    en: 'Must be not more than 200 symbols',
    ru: 'Должно быть не более 200 символов',
  },
  requiredChatText: {
    en: 'Required text',
    ru: 'Текст обязателен для ввода',
  },
};
