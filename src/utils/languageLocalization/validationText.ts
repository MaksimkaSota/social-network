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

  min: {
    en: 'Must be not less than %{number} symbols',
    ru: 'Не менее %{number} символов',
  },
  max: {
    en: 'Must be not more than %{number} symbols',
    ru: 'Не более %{number} символов',
  },
};
