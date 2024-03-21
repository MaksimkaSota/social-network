import type { FC, ReactElement } from 'react';
import { Form } from 'formik';
import classes from './ChatForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import type { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  disabled: boolean;
};

export const ChatForm: FC<PropsType> = ({ handleChange, errors, touched, disabled }): ReactElement => {
  return (
    <Form className={classes.sendTextBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputText}
        name={FormName.text}
        component="textarea"
        placeholder="My text"
        onChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <Button className={classes.sendButton} text="Send text" type="submit" disabled={disabled} />
    </Form>
  );
};
