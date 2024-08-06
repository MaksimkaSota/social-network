import type { LanguageLocalizationType } from '../types/common';

export const errorText: LanguageLocalizationType = {
  some: {
    en: 'Some',
    ru: 'Некоторая',
  },
  error: {
    en: 'Error',
    ru: 'Ошибка',
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
    en: 'Failed to load or update status',
    ru: 'Не удалось загрузить или обновить статус',
  },
  data: {
    en: 'Failed to update data',
    ru: 'Не удалось обновить данные',
  },
  chat: {
    en: 'Waiting for a chat connection',
    ru: 'Ожидание подключения к чату',
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
  promise: {
    ru: 'Некоторая ошибка соединения! Приносим извинения... Скоро исправим!',
  },
  ui: {
    ru: 'Некоторая ошибка интерфейса! Приносим извинения... Скоро исправим!',
  },
};
