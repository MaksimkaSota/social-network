import { useEffect } from 'react';
import type { FC, KeyboardEvent, ReactElement } from 'react';
import { Form, useFormikContext } from 'formik';
import classes from './ChatForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import type {
  FormikErrorsType,
  FormikTouchedType,
  HandleChangeType,
  ValidateFormType,
} from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';
import type { ChannelStatus } from '../../../../../utils/types/common';
import { submitFormOnKeyboardPress } from '../../../../../utils/helpers/componentsHelpers';
import { contentText } from '../../../../../utils/languageLocalization/contentText';
import { errorText } from '../../../../../utils/languageLocalization/errorText';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  disabled: boolean;
  channelStatus: ChannelStatus;
  languageMode: string;
  validateForm: ValidateFormType;
};

export const ChatForm: FC<PropsType> = ({
  handleChange,
  errors,
  touched,
  disabled,
  channelStatus,
  languageMode,
  validateForm,
}): ReactElement => {
  useEffect(() => {
    validateForm();
    // eslint-disable-next-line
  }, [languageMode]);

  const { submitForm } = useFormikContext();

  const onKeyDown = (event: KeyboardEvent): void => {
    submitFormOnKeyboardPress(event, submitForm, channelStatus);
  };

  return (
    <Form className={classes.sendTextBlock}>
      {channelStatus !== 'received' && <p className={classes.pendingText}>{errorText.chat[languageMode]}</p>}
      <div className={classes.formBlock}>
        <FormField
          classNameFormField={classes.fieldBlock}
          classNameField={classes.inputText}
          name={FormName.text}
          component="textarea"
          placeholder={contentText.ctrlEnter[languageMode]}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          errors={errors}
          touched={touched}
        />
        <Button
          className={classes.sendButton}
          text={contentText.chatBtn[languageMode]}
          type="submit"
          disabled={disabled}
        />
      </div>
    </Form>
  );
};
