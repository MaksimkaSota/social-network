import { FC, ReactElement } from 'react';
import { Form } from 'formik';
import classes from './MessageForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormikErrorsType, FormikTouchedType, FormName, HandleChangeType } from '../../../../../utils/types/form';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  disabled: boolean;
};

export const MessageForm: FC<PropsType> = ({ handleChange, errors, touched, disabled }): ReactElement => {
  return (
    <Form className={classes.addMessageBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputMessage}
        name={FormName.text}
        component="textarea"
        placeholder="Message text"
        onChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <Button text="Add message" type="submit" disabled={disabled} />
    </Form>
  );
};
