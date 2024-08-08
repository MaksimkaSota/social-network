import { useEffect } from 'react';
import type { ChangeEvent, FC, ReactElement } from 'react';
import { Field, Form } from 'formik';
import { FormName, Language, Theme } from '../../../utils/types/enums';
import type { SetFieldValueType } from '../../../utils/types/form';
import classes from './ViewForm.module.scss';
import enMode from '../../../assets/images/en.png';
import ruMode from '../../../assets/images/ru.png';
import lightMode from '../../../assets/images/light.png';
import darkMode from '../../../assets/images/dark.png';
import { contentText } from '../../../utils/languageLocalization/contentText';

type PropsType = {
  setFieldValue: SetFieldValueType;
  languageMode: string;
  themeMode: string;
  setLanguageMode: (languageMode: string) => void;
  setThemeMode: (themeMode: string) => void;
};

export const ViewForm: FC<PropsType> = ({
  setFieldValue,
  languageMode,
  themeMode,
  setLanguageMode,
  setThemeMode,
}): ReactElement => {
  useEffect(() => {
    setFieldValue(FormName.language, languageMode);
    setFieldValue(FormName.theme, themeMode);
    // eslint-disable-next-line
  }, [languageMode, themeMode]);

  const onLanguageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setLanguageMode(event.target.value);
  };

  const onThemeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setThemeMode(event.target.value);
  };

  return (
    <Form className={classes.viewBlock}>
      <div className={classes.selectBlock}>
        {languageMode === Language.en && <img className={classes.flag} src={enMode} alt="Great Britain flag" />}
        {languageMode === Language.ru && <img className={classes.flag} src={ruMode} alt="Russia flag" />}
        <Field name={FormName.language} component="select" className={classes.select} onChange={onLanguageChange}>
          <option value={Language.en}>{contentText.en[languageMode]}</option>
          <option value={Language.ru}>{contentText.ru[languageMode]}</option>
        </Field>
      </div>
      <div className={classes.selectBlock}>
        {themeMode === Theme.light && <img className={classes.flag} src={lightMode} alt="Sun" />}
        {themeMode === Theme.dark && <img className={classes.flag} src={darkMode} alt="Sun eclipse" />}
        <Field name={FormName.theme} component="select" className={classes.select} onChange={onThemeChange}>
          <option value={Theme.light}>{contentText.light[languageMode]}</option>
          <option value={Theme.dark}>{contentText.dark[languageMode]}</option>
        </Field>
      </div>
    </Form>
  );
};
