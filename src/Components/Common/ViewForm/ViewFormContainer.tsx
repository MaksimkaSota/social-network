import { memo } from 'react';
import type { ReactElement } from 'react';
import { Formik } from 'formik';
import { ViewForm } from './ViewForm';

type PropsType = {
  languageMode: string;
  themeMode: string;
  setLanguageMode: (languageMode: string) => void;
  setThemeMode: (themeMode: string) => void;
};

export const ViewFormContainer = memo<PropsType>(
  ({ languageMode, themeMode, setLanguageMode, setThemeMode }): ReactElement => {
    return (
      <Formik initialValues={{ language: languageMode, theme: themeMode }} onSubmit={() => {}}>
        {({ setFieldValue }): ReactElement => (
          <ViewForm setFieldValue={setFieldValue} setLanguageMode={setLanguageMode} setThemeMode={setThemeMode} />
        )}
      </Formik>
    );
  }
);
