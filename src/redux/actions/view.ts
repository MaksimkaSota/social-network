import type { SetLanguageModeAction, SetThemeModeAction } from '../types/view';
import { ViewActionType } from '../types/view';

export const setLanguageMode = (language: string): SetLanguageModeAction => ({
  type: ViewActionType.SET_VIEW_LANGUAGE_MODE,
  payload: language,
});
export const setThemeMode = (theme: string): SetThemeModeAction => ({
  type: ViewActionType.SET_VIEW_THEME_MODE,
  payload: theme,
});
