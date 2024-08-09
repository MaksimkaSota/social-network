import type { ViewAction, ViewState } from '../types/view';
import { ViewActionType } from '../types/view';
import { Language, Theme } from '../../utils/types/enums';

const initialState: ViewState = {
  languageMode: Language.en,
  themeMode: Theme.light,
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
