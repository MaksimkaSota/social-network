import type { FC, ReactElement } from 'react';
import { Form } from 'formik';
import classes from './MessageForm.module.scss';
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
