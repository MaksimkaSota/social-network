import { ErrorMessage, Field } from 'formik';
import classes from './FormField.module.scss';
import cn from 'classnames';

export const FormField = ({
                            classNameFormField,
                            classNameField,
                            classNameLabel,
                            name,
                            component = 'input',
                            type,
                            placeholder,
                            text,
                            props = {},
                            onChange,
                            errors
                          }) => {
  return (
    <div className={classNameFormField}>
      <Field
        className={cn(classNameField, {
          [classes.errorValidation]: errors && errors[name],
          [classes.successValidation]: errors && !errors[name]
        })}
        name={name}
        component={component}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
      <ErrorMessage name={name} component="p" className={classes.fieldError} />
      {text && <label className={classNameLabel} htmlFor={props.id}>{text}</label>}
    </div>
  );
};
