import type { KeyboardEvent, ReactElement } from 'react';
import { memo } from 'react';
import cn from 'classnames';
import { ErrorMessage, FastField } from 'formik';
import classes from './FormField.module.scss';
import type { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../utils/types/form';

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
  onKeyDown?: (event: KeyboardEvent) => void;
  errors?: FormikErrorsType;
  touched?: FormikTouchedType;
};

export const FormField = memo<PropsType>(
  ({
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
    onKeyDown,
    errors,
    touched,
  }): ReactElement => {
    return (
      <div className={classNameFormField}>
        <FastField
          className={cn(classNameField, classes.successValidation, {
            [classes.errorValidation]: touched?.[name] && errors?.[name],
          })}
          name={name}
          component={component}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
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
  }
);
