import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setLanguageMode, setThemeMode } from '../redux/actions/view';
import { Language, Theme } from '../utils/types/enums';
import { useTypedDispatch } from './useTypedDispatch';

export const useViewParameters = (languageMode: string, themeMode: string): void => {
  const dispatch = useTypedDispatch();

  const [viewParams, setViewParams] = useSearchParams();

  useEffect(() => {
    const parsedSearchParams = Object.fromEntries(viewParams);

    const actualLanguageMode = parsedSearchParams.language || languageMode;
    const actualThemeMode = parsedSearchParams.theme || themeMode;

    dispatch(setLanguageMode(actualLanguageMode));
    dispatch(setThemeMode(actualThemeMode));
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    const queryObject: Partial<{ language: string; theme: string }> = {};

    if (languageMode !== Language.en) {
      queryObject.language = Language.ru;
    }
    if (themeMode !== Theme.light) {
      queryObject.theme = Theme.dark;
    }

    const queryString = new URLSearchParams(queryObject).toString();

    setViewParams(queryString);
    // eslint-disable-next-line
  }, [languageMode, themeMode]);
};
