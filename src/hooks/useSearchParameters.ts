import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setLanguageMode, setThemeMode } from '../redux/actions/view';
import { getUsers } from '../redux/thunks/users';
import { Language, Theme } from '../utils/types/enums';
import type { FilterType } from '../utils/types/common';
import { useTypedDispatch } from './useTypedDispatch';

export const useSearchParameters = (
  languageMode: string,
  themeMode: string,
  filter: FilterType,
  page: number,
  pageSize: number
): void => {
  const dispatch = useTypedDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const parsedSearchParams = Object.fromEntries(searchParams);

    const actualTerm = parsedSearchParams.term || filter.term;
    const actualFriend = parsedSearchParams.friend || filter.friend;
    const actualFilter = { term: actualTerm, friend: actualFriend };

    const actualPage = +parsedSearchParams.page || page;

    const actualLanguageMode = parsedSearchParams.language || languageMode;
    const actualThemeMode = parsedSearchParams.theme || themeMode;

    dispatch(setLanguageMode(actualLanguageMode));
    dispatch(setThemeMode(actualThemeMode));
    dispatch(getUsers(actualPage, pageSize, actualFilter));
    // eslint-disable-next-line
  }, [dispatch, searchParams]);

  useEffect(() => {
    const queryObject: Partial<{ language: string; theme: string; term: string; friend: string; page: string }> = {};

    if (languageMode !== Language.en) {
      queryObject.language = Language.ru;
    }
    if (themeMode !== Theme.light) {
      queryObject.theme = Theme.dark;
    }
    if (filter.term) {
      queryObject.term = filter.term;
    }
    if (filter.friend) {
      queryObject.friend = filter.friend;
    }
    if (page !== 1) {
      queryObject.page = String(page);
    }

    const queryString = new URLSearchParams(queryObject).toString();

    setSearchParams(queryString);
    // eslint-disable-next-line
  }, [languageMode, themeMode, filter, page]);
};
