import type { ViewAction, ViewState } from '../types/view';
import { ViewActionType } from '../types/view';

const initialState: ViewState = {
  languageMode: 'en',
  themeMode: 'light',
};

export const viewReducer = (state: ViewState = initialState, action: ViewAction): ViewState => {
  switch (action.type) {
    case ViewActionType.SET_VIEW_LANGUAGE_MODE:
      return {
        ...state,
        languageMode: action.payload,
      };
    case ViewActionType.SET_VIEW_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload,
      };
    default:
      return state;
  }
};
