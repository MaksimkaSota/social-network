import type { FC, ReactElement } from 'react';
import { Footer } from './Footer';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { viewSelector } from '../../redux/selectors/selectors';
import { setLanguageMode, setThemeMode } from '../../redux/actions/view';

export const FooterContainer: FC = (): ReactElement => {
  const { languageMode, themeMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();
  const setLanguageModeCallback = (language: string) => dispatch(setLanguageMode(language));
  const setThemeModeCallback = (theme: string) => dispatch(setThemeMode(theme));

  return (
    <Footer
      languageMode={languageMode}
      themeMode={themeMode}
      setLanguageMode={setLanguageModeCallback}
      setThemeMode={setThemeModeCallback}
    />
  );
};
