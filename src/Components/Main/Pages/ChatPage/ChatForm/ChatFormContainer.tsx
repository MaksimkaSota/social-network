import type { Dispatch, ReactElement, SetStateAction } from 'react';
import { useEffect, useState, memo } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ChatForm } from './ChatForm';
import type { Nullable } from '../../../../../utils/types/common';

const validationSchema = Yup.object().shape({
  text: Yup.string().max(100, 'Must be not more than 100 characters').required('Required'),
});

type PropsType = {
  wsChannel: Nullable<WebSocket>;
  isWsChannelOpen: boolean;
  setIsWsChannelOpen: Dispatch<SetStateAction<boolean>>;
};
type FormDataType = {
  text: string;
};

export const ChatFormContainer = memo<PropsType>(({ wsChannel, isWsChannelOpen, setIsWsChannelOpen }): ReactElement => {
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
  useEffect(() => {
    if (!wsChannel) return;
    wsChannel.onopen = (): void => {
      console.log('open WebSocket');
      setIsWsChannelOpen(true);
      setReadyStatus('ready');
    };
  }, [wsChannel]);

  const onSubmit = (formData: FormDataType, { resetForm }: FormikHelpers<FormDataType>): void => {
    wsChannel?.send(formData.text);
    resetForm();
  };

  const isClosed = wsChannel === null || readyStatus !== 'ready' || !isWsChannelOpen;

  return (
    <Formik initialValues={{ text: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleChange, errors, touched }): ReactElement => (
        <ChatForm
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          disabled={Boolean(errors.text) || isClosed}
        />
      )}
    </Formik>
  );
});
