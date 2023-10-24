import { Form } from 'formik';
import classes from './LoginForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';

export const LoginForm = ({isSubmitting, status}) => {
  return (
    <Form className={classes.loginForm}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.field}
        name={'email'}
        type={'email'}
        placeholder={'Email'}
      />
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.field}
        name={'password'}
        type={'password'}
        placeholder={'Password'}
        props={{autoComplete: 'on'}}
      />
      <FormField
        classNameFormField={classes.toggleBlock}
        classNameField={classes.checkbox}
        classNameLabel={classes.label}
        name={'rememberMe'}
        type={'checkbox'}
        text={'Remember me'}
        props={{id: 'rememberMe'}}
      />
      {status && <p className={classes.formError}>{status}</p>}
      <Button text={'Login'} type={'submit'} className={classes.loginButton} disabled={isSubmitting} />
    </Form>
  );
};
