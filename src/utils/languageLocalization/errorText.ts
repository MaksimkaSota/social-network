import type { LanguageLocalizationType } from '../types/common';

export const errorText: LanguageLocalizationType = {
  some: {
    ru: 'Некоторая',
    en: 'Some',
  },
  error: {
    ru: 'Ошибка',
    en: 'Error',
  },
  loadPhoto: {
    en: 'Failed to load photo',
    ru: 'Не удалось загрузить фото',
  },
  updatePhoto: {
    en: 'Failed to update photo',
    ru: 'Не удалось обновить фото',
  },
  status: {
    en: 'Failed to update status',
    ru: 'Не удалось обновить статус',
  },
  data: {
    en: 'Failed to update data',
    ru: 'Не удалось обновить данные',
  },
  authorization: {
    ru: 'Вы не авторизованы',
  },
  initialization: {
    ru: 'При инициализации приложения что-то пошло не так',
  },
  login: {
    ru: 'При попытке войти в систему что-то пошло не так',
  },
  logout: {
    ru: 'При попытке выйти из системы что-то пошло не так',
  },
  profile: {
    ru: 'При загрузке профиля что-то пошло не так',
  },
  incorrectLoginData: {
    ru: 'Неверная почта или пароль',
  },
  incorrectData: {
    ru: 'Неверные данные',
  },
  incorrectStatusText: {
    ru: 'Максимальная длина статуса 300 символов',
  },
  incorrectPhotoText: {
    ru: 'Файл долен иметь расширение .jpg, .jpeg, .png и быть меньше 10 МБ',
  },
};
