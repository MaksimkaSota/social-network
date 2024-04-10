import type { ReactElement } from 'react';
import { memo } from 'react';
import type { FormikHelpers } from 'formik';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ChatForm } from './ChatForm';
import type { ChannelStatus } from '../../../../../utils/types/common';

const validationSchema = Yup.object().shape({
  text: Yup.string().max(100, 'Must be not more than 100 characters').required('Required'),
});

type PropsType = {
  sendMessage: (message: string) => void;
  channelStatus: ChannelStatus;
};
type FormDataType = {
  text: string;
};

export const ChatFormContainer = memo<PropsType>(({ sendMessage, channelStatus }): ReactElement => {
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
    <Formik initialValues={{ text: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleChange, errors, touched }): ReactElement => (
        <ChatForm
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          disabled={Boolean(errors.text) || isClosed}
          channelStatus={channelStatus}
        />
      )}
    </Formik>
  );
});
