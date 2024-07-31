import type { FC, KeyboardEvent, ReactElement } from 'react';
import { Form, useFormikContext } from 'formik';
import classes from './PublicationForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import type { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';
import { submitFormOnKeyboardPress } from '../../../../../utils/helpers/componentsHelpers';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  isValid: boolean;
  dirty: boolean;
  buttonText: string;
};

export const PublicationForm: FC<PropsType> = ({
  handleChange,
  errors,
  touched,
  isValid,
  dirty,
  buttonText,
}): ReactElement => {
  const { submitForm } = useFormikContext();

  const onKeyDown = (event: KeyboardEvent): void => {
    submitFormOnKeyboardPress(event, submitForm);
  };

  return (
    <Form className={classes.addPublicationBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputPost}
        name={FormName.text}
        component="textarea"
        placeholder="You can press Ctrl+Enter to send"
        onChange={handleChange}
        onKeyDown={onKeyDown}
        errors={errors}
        touched={touched}
      />
      <Button className={classes.sendButton} text={buttonText} type="submit" disabled={!isValid || !dirty} />
    </Form>
  );
};
