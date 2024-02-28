import { ErrorMessage, Field } from 'formik';
import cn from 'classnames';
import classes from './FormField.module.scss';
import { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../utils/types/formik';
import { FC, ReactElement } from 'react';

type PropsType = {
  classNameFormField?: string;
  classNameField: string;
  classNameLabel?: string;
  name: string;
  component?: string;
  type?: string;
  placeholder?: string;
  text?: string;
  props?: { [attribute: string]: string };
  onChange: HandleChangeType;
  errors?: FormikErrorsType;
  touched?: FormikTouchedType;
};

export const FormField: FC<PropsType> = ({
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
  errors,
  touched,
}): ReactElement => {
  return (
    <div className={classNameFormField}>
      <Field
        className={cn(classNameField, classes.successValidation, {
          [classes.errorValidation]: touched?.[name] && errors?.[name],
        })}
        name={name}
        component={component}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
      <ErrorMessage name={name} component="p" className={classes.fieldError} />
      {text && (
        <label className={classNameLabel} htmlFor={props.id}>
          {text}
        </label>
      )}
    </div>
  );
};
