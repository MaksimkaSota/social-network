type TextContentType = {
  [textContentKey: string]: { [languageKey: string]: string };
};

export const textContent: TextContentType = {
  headline: {
    ru: 'Социальная сеть',
    en: 'Social Network',
  },
  loginBtn: {
    ru: 'Войти',
    en: 'Login',
  },
  logoutBtn: {
    ru: 'Выйти',
    en: 'Logout',
  },
  headerPhotoErr: {
    ru: 'Фото не загружено',
    en: 'Photo is not loaded',
  },
  loginTitle: {
    ru: 'Форма для входа',
    en: 'Login form',
  },
  incorrectAuthText: {
    ru: 'Войдите, пожалуйста',
    en: 'Log in, please',
  },
  loginTextPt1: {
    ru: 'Для входа пройдите регистрацию',
    en: 'To log in get registered',
  },
  loginTextPt2: {
    ru: 'здесь',
    en: 'here',
  },
  loginTextPt3: {
    ru: 'или используйте общие учетные данные тестового аккаунта',
    en: 'or use common test account credentials',
  },
  email: {
    ru: 'Почта',
    en: 'Email',
  },
  password: {
    ru: 'Пароль',
    en: 'Password',
  },
  remember: {
    ru: 'Запомнить меня',
    en: 'Remember me',
  },
  symbols: {
    ru: 'Символы с картинки',
    en: 'Symbols from image',
  },
  error: {
    ru: 'Ошибка',
    en: 'Error',
  },
};
