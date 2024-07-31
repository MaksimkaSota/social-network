import type { ChangeEvent, FC, ReactElement } from 'react';
import { Field, Form } from 'formik';
import { FormName } from '../../../utils/types/enums';
import type { SetFieldValueType } from '../../../utils/types/form';

type PropsType = {
  setFieldValue: SetFieldValueType;
  setLanguageMode: (languageMode: string) => void;
  setThemeMode: (themeMode: string) => void;
};

export const ViewForm: FC<PropsType> = ({ setFieldValue, setLanguageMode, setThemeMode }): ReactElement => {
  const onLanguageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFieldValue(FormName.language, event.target.value);
    setLanguageMode(event.target.value);
  };

  const onThemeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFieldValue(FormName.theme, event.target.value);
    setThemeMode(event.target.value);
  };

  return (
    <Form className="xxx">
      <Field name={FormName.language} component="select" className="xxx" onChange={onLanguageChange}>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </Field>
      <Field name={FormName.theme} component="select" className="xxx" onChange={onThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </Field>
    </Form>
  );
};
