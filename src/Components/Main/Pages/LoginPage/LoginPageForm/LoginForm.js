import { ErrorMessage, Field, Form } from 'formik';
import classes from './LoginForm.module.scss';
import { Button } from '../../../../Common/Button/Button';

export const LoginForm = ({isSubmitting}) => {
  return (
    <Form className={classes.loginForm}>
      <div className={classes.fieldBlock}>
        <Field
          name={'email'}
          type={'email'}
          className={classes.field}
          placeholder={'Email'}
        />
        <ErrorMessage name="email" component="p" className={classes.fieldError} />
      </div>
      <div className={classes.fieldBlock}>
        <Field
          name={'password'}
          type={'password'}
          className={classes.field}
          placeholder={'Password'}
          autoComplete={'on'}
        />
        <ErrorMessage name="password" component="p" className={classes.fieldError} />
      </div>
      <div className={classes.toggleBlock}>
        <Field
          name={'rememberMe'}
          type={'checkbox'}
          className={classes.checkbox}
          id={'rememberMe'}
        />
        <label htmlFor={'rememberMe'} className={classes.label}>Remember me</label>
      </div>
      <Button text={'Login'} type={'submit'} className={classes.loginButton} disabled={isSubmitting} />
    </Form>
  );
};
