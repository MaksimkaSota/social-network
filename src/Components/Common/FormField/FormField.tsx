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
  text?: string;
  errors?: FormikErrorsType;
  touched?: FormikTouchedType;
  id?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange: HandleChangeType;
  onKeyDown?: (event: KeyboardEvent) => void;
};

export const FormField = memo<PropsType>(
  ({
    classNameFormField,
    classNameField,
    classNameLabel,
    name,
    component = 'input',
    text,
    errors,
    touched,
    ...props
  }): ReactElement => {
    return (
      <div className={classNameFormField}>
        <FastField
          className={cn(classNameField, classes.successValidation, {
            [classes.errorValidation]: touched?.[name] && errors?.[name],
          })}
          name={name}
          component={component}
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
