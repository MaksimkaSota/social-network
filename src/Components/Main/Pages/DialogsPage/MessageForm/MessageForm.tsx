import type { FC, KeyboardEvent, ReactElement } from 'react';
import { Form, useFormikContext } from 'formik';
import classes from './MessageForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import type { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';
import { submitFormOnKeyboardPress } from '../../../../../utils/helpers/componentHelpers';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  isValid: boolean;
  dirty: boolean;
};

export const MessageForm: FC<PropsType> = ({ handleChange, errors, touched, isValid, dirty }): ReactElement => {
  const { submitForm } = useFormikContext();

  const onKeyDown = (event: KeyboardEvent): void => {
    submitFormOnKeyboardPress(event, submitForm);
  };

  return (
    <Form className={classes.addMessageBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputMessage}
        name={FormName.text}
        component="textarea"
        placeholder="You can press Ctrl+Enter to send a message"
        onChange={handleChange}
        onKeyDown={onKeyDown}
        errors={errors}
        touched={touched}
      />
      <Button text="Add message" type="submit" disabled={!isValid || !dirty} />
    </Form>
  );
};
