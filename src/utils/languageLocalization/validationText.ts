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
  requiredPassword: {
    en: 'Required password',
    ru: 'Пароль обязателен для ввода',
  },
  requiredCaptcha: {
    en: 'Required captcha',
    ru: 'Символы с картинки обязательны для ввода',
  },
  requiredName: {
    en: 'Required full name',
    ru: 'Полное имя обязательно для ввода',
  },
  requiredPublication: {
    en: 'Required publication',
    ru: 'Публикация обязательна для ввода',
  },
  requiredChatText: {
    en: 'Required text',
    ru: 'Текст обязателен для ввода',
  },

  min3: {
    en: 'Must be not less than 3 symbols',
    ru: 'Не менее 3 символов',
  },
  max30: {
    en: 'Must be not more than 30 symbols',
    ru: 'Не более 30 символов',
  },
  max100: {
    en: 'Must be not more than 100 symbols',
    ru: 'Не более 100 символов',
  },
  max200: {
    en: 'Must be not more than 200 symbols',
    ru: 'Не более 200 символов',
  },
};
