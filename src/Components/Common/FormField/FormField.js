import { ErrorMessage, Field } from 'formik';
import classes from './FormField.module.scss';

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
                            onChange
                          }) => {
  return (
    <div className={classNameFormField}>
      <Field
        className={classNameField}
        name={name}
        component={component}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
      <ErrorMessage name={name} component="p" className={classes.fieldError} />
      {text && <label className={classNameLabel} htmlFor={props.id} >{text}</label>}
    </div>
  );
};
