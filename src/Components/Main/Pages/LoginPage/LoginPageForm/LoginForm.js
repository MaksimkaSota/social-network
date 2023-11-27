import { Form } from 'formik';
import classes from './LoginForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';

export const LoginForm = ({isSubmitting, status, handleChange}) => {
  return (
    <Form className={classes.loginForm}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.field}
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange} />
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.field}
        name="password"
        type="password"
        placeholder="Password"
        props={{autoComplete: 'on'}}
        onChange={handleChange} />
      <FormField
        classNameFormField={classes.toggleBlock}
        classNameField={classes.checkbox}
        classNameLabel={classes.label}
        name="rememberMe"
        type="checkbox"
        text="Remember me"
        props={{id: 'rememberMe'}}
        onChange={handleChange} />
      {status && <FormServerError status={status} className={classes.error} />}
      <Button text="Login" type="submit" className={classes.loginButton} disabled={isSubmitting} />
    </Form>
  );
};
