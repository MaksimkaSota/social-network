import { useState } from 'react';
import type { FC, ReactElement } from 'react';
import classes from './InputPassword.module.scss';
import { FormField } from '../FormField/FormField';
import { FormName } from '../../../utils/types/enums';
import { contentText } from '../../../utils/languageLocalization/contentText';
import Eye from '../../../assets/images/eye.svg';
import SlashEye from '../../../assets/images/eye-slash.svg';
import type { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../utils/types/form';

type PropsType = {
  languageMode: string;
  onChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
};

export const InputPassword: FC<PropsType> = ({ languageMode, onChange, errors, touched }): ReactElement => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const onEyeClick = (): void => {
    setVisible((prevState) => !prevState);
  };

  return (
    <div className={classes.passwordBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.field}
        name={FormName.password}
        type={isVisible ? 'text' : 'password'}
        placeholder={contentText.password[languageMode]}
        autoComplete="on"
        onChange={onChange}
        errors={errors}
        touched={touched}
      />
      {/* eslint-disable-next-line */}
      <div className={classes.eyeContainer} onClick={onEyeClick}>
        {isVisible && <Eye />}
        {!isVisible && <SlashEye />}
      </div>
    </div>
  );
};
