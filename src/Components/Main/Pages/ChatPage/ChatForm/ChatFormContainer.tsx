import type { ReactElement } from 'react';
import { memo } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ChatForm } from './ChatForm';

const validationSchema = Yup.object().shape({
  text: Yup.string().max(100, 'Must be not more than 100 characters').required('Required'),
});

type PropsType = {
  wsChannel: WebSocket;
};
type FormDataType = {
  text: string;
};

export const ChatFormContainer = memo<PropsType>(({ wsChannel }): ReactElement => {
  const onSubmit = (formData: FormDataType, { resetForm }: FormikHelpers<FormDataType>): void => {
    wsChannel.send(formData.text);
    resetForm();
  };

  return (
    <Formik initialValues={{ text: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleChange, errors, touched }): ReactElement => (
        <ChatForm handleChange={handleChange} errors={errors} touched={touched} disabled={Boolean(errors.text)} />
      )}
    </Formik>
  );
});
