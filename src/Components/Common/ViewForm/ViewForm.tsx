import { type ChangeEvent, type FC, type ReactElement, useEffect } from 'react';
import { Field, Form } from 'formik';
import classes from './ViewForm.module.scss';
import EnMode from '../../../assets/images/en.svg';
import RuMode from '../../../assets/images/ru.svg';
import LightMode from '../../../assets/images/light.svg';
import DarkMode from '../../../assets/images/dark.svg';
import { FormName, Language, Theme } from '../../../utils/types/enums';
import type { SetFieldValueType } from '../../../utils/types/form';
import { contentText } from '../../../utils/languageLocalization/contentText';
import { altText } from '../../../utils/languageLocalization/altText';

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
        {languageMode === Language.en && <EnMode className={classes.flag} alt={altText.enFlag[languageMode]} />}
        {languageMode === Language.ru && <RuMode className={classes.flag} alt={altText.ruFlag[languageMode]} />}
        <Field name={FormName.language} component="select" className={classes.select} onChange={onLanguageChange}>
          <option value={Language.en}>{contentText.en[languageMode]}</option>
          <option value={Language.ru}>{contentText.ru[languageMode]}</option>
        </Field>
      </div>
      <div className={classes.selectBlock}>
        {themeMode === Theme.light && <LightMode className={classes.theme} alt={altText.light[languageMode]} />}
        {themeMode === Theme.dark && <DarkMode className={classes.theme} alt={altText.dark[languageMode]} />}
        <Field name={FormName.theme} component="select" className={classes.select} onChange={onThemeChange}>
          <option value={Theme.light}>{contentText.light[languageMode]}</option>
          <option value={Theme.dark}>{contentText.dark[languageMode]}</option>
        </Field>
      </div>
    </Form>
  );
};
