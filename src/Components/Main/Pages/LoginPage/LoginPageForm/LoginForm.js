import { Form } from 'formik';
import classes from './LoginForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';
import cn from 'classnames';

export const LoginForm = ({isSubmitting, status, handleChange, errors}) => {
  return (
    <Form className={classes.loginForm}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={cn(classes.field, {[classes.fieldError]: status})}
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        errors={errors}
      />
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={cn(classes.field, {[classes.fieldError]: status})}
        name="password"
        type="password"
        placeholder="Password"
        props={{autoComplete: 'on'}}
        onChange={handleChange}
        errors={errors}
      />
      <FormField
        classNameFormField={classes.toggleBlock}
        classNameField={classes.checkbox}
        classNameLabel={classes.label}
        name="rememberMe"
        type="checkbox"
        text="Remember me"
        props={{id: 'rememberMe'}}
        onChange={handleChange}
      />
      {status && <FormServerError status={status} className={classes.error} />}
      <Button text="Login" type="submit" className={classes.loginButton} disabled={isSubmitting} />
    </Form>
  );
};
