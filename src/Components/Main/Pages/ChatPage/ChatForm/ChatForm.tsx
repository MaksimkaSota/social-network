import type { FC, KeyboardEvent, ReactElement } from 'react';
import { Form, useFormikContext } from 'formik';
import classes from './ChatForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import type { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';
import type { ChannelStatus } from '../../../../../utils/types/common';
import { submitFormOnKeyboardPress } from '../../../../../utils/helpers/componentHelpers';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  disabled: boolean;
  channelStatus: ChannelStatus;
};

export const ChatForm: FC<PropsType> = ({ handleChange, errors, touched, disabled, channelStatus }): ReactElement => {
  const { submitForm } = useFormikContext();

  const onKeyDown = (event: KeyboardEvent): void => {
    submitFormOnKeyboardPress(event, submitForm, channelStatus);
  };

  return (
    <Form className={classes.sendTextBlock}>
      {channelStatus !== 'received' && <p className={classes.pendingText}>Waiting for a chat connection</p>}
      <div className={classes.formBlock}>
        <FormField
          classNameFormField={classes.fieldBlock}
          classNameField={classes.inputText}
          name={FormName.text}
          component="textarea"
          placeholder="You can press Ctrl+Enter to send a message"
          onChange={handleChange}
          onKeyDown={onKeyDown}
          errors={errors}
          touched={touched}
        />
        <Button className={classes.sendButton} text="Send text" type="submit" disabled={disabled} />
      </div>
    </Form>
  );
};