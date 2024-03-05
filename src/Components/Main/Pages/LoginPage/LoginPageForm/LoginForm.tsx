import { FC, ReactElement } from 'react';
import { Form } from 'formik';
import cn from 'classnames';
import classes from './LoginForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';
import { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';

type PropsType = {
  isSubmitting: boolean;
  status: any;
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  captchaUrl: string;
};

export const LoginForm: FC<PropsType> = ({
  isSubmitting,
  status,
  handleChange,
  errors,
  touched,
  captchaUrl,
}): ReactElement => {
  return (
    <Form className={cn(classes.loginForm, { [classes.loginFormError]: status })}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.field}
        name={FormName.email}
        type="email"
        placeholder="Email"
        onChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.field}
        name={FormName.password}
        type="password"
        placeholder="Password"
        props={{ autoComplete: 'on' }}
        onChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <FormField
        classNameFormField={classes.toggleBlock}
        classNameField={classes.checkbox}
        classNameLabel={classes.label}
        name={FormName.remember_me}
        type="checkbox"
        text="Remember me"
        props={{ id: 'rememberMe' }}
        onChange={handleChange}
      />
      {captchaUrl && (
        <>
          <img className={classes.captcha} src={captchaUrl} alt="captcha" />
          <FormField
            classNameFormField={classes.fieldBlock}
            classNameField={classes.field}
            name={FormName.captcha}
            type="text"
            placeholder="Symbols from image"
            onChange={handleChange}
            errors={errors}
            touched={touched}
          />
        </>
      )}
      <Button text="Login" type="submit" className={classes.loginButton} disabled={isSubmitting} />
      {status && <FormServerError status={status} className={classes.error} />}
    </Form>
  );
};
