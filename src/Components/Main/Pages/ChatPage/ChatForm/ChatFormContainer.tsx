import { memo, type ReactElement } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ChatForm } from './ChatForm';
import { replaceString } from '../../../../../utils/helpers/componentsHelpers';
import type { ChannelStatus } from '../../../../../utils/types/common';
import { validationText } from '../../../../../utils/languageLocalization/validationText';

const validationSchema = (languageMode: string) => {
  return Yup.object().shape({
    text: Yup.string()
      .max(200, replaceString(validationText.max[languageMode], { '%{number}': 200 }))
      .required(validationText.requiredChatText[languageMode]),
  });
};

type PropsType = {
  sendMessage: (message: string) => void;
  channelStatus: ChannelStatus;
  languageMode: string;
};
type FormDataType = {
  text: string;
};

export const ChatFormContainer = memo<PropsType>(({ sendMessage, channelStatus, languageMode }): ReactElement => {
  const onSubmit = (formData: FormDataType, { resetForm }: FormikHelpers<FormDataType>): void => {
    const date = new Date();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes} UTC+0`;

    const message = `${formData.text} ${time}`;
    sendMessage(message);
    resetForm();
  };

  const isClosed = channelStatus !== 'received';

  return (
    <Formik initialValues={{ text: '' }} validationSchema={validationSchema(languageMode)} onSubmit={onSubmit}>
      {({ handleChange, errors, touched, validateForm }): ReactElement => (
        <ChatForm
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          disabled={Boolean(errors.text) || isClosed}
          channelStatus={channelStatus}
          languageMode={languageMode}
          validateForm={validateForm}
        />
      )}
    </Formik>
  );
});
