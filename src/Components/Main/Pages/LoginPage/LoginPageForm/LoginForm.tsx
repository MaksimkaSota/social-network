import { useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import { Form } from 'formik';
import cn from 'classnames';
import classes from './LoginForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';
import type {
  FormikErrorsType,
  FormikTouchedType,
  HandleChangeType,
  SetStatusType,
  ValidateFormType,
} from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';
import { contentText } from '../../../../../utils/languageLocalization/contentText';
import { InputPassword } from '../../../../Common/InputPassword/InputPassword';
import { altText } from '../../../../../utils/languageLocalization/altText';

type PropsType = {
  isSubmitting: boolean;
  status: any;
  setStatus: SetStatusType;
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  captchaUrl: string;
  languageMode: string;
  validateForm: ValidateFormType;
};

export const LoginForm: FC<PropsType> = ({
  isSubmitting,
  status,
  setStatus,
  handleChange,
  errors,
  touched,
  captchaUrl,
  languageMode,
  validateForm,
}): ReactElement => {
  useEffect(() => {
    setStatus();
    validateForm();
    // eslint-disable-next-line
  }, [languageMode]);

  return (
    <Form className={cn(classes.loginForm, { [classes.loginFormError]: status })}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.field}
        name={FormName.email}
        type="email"
        placeholder={contentText.email[languageMode]}
        onChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <InputPassword languageMode={languageMode} onChange={handleChange} errors={errors} touched={touched} />
      <FormField
        classNameFormField={classes.toggleBlock}
        classNameField={classes.checkbox}
        classNameLabel={classes.label}
        name={FormName.remember_me}
        type="checkbox"
        text={contentText.remember[languageMode]}
        id="rememberMe"
        onChange={handleChange}
      />
      {captchaUrl && (
        <>
          <img className={classes.captcha} src={captchaUrl} alt={altText.captcha[languageMode]} />
          <FormField
            classNameFormField={classes.fieldBlock}
            classNameField={classes.field}
            name={FormName.captcha}
            type="text"
            placeholder={contentText.symbols[languageMode]}
            onChange={handleChange}
            errors={errors}
            touched={touched}
          />
        </>
      )}
      <Button
        text={contentText.loginBtn[languageMode]}
        type="submit"
        className={classes.loginButton}
        disabled={isSubmitting}
      />
      {status && <FormServerError status={status} className={classes.error} />}
    </Form>
  );
};
