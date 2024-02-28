import React, { ReactElement } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MessageForm } from './MessageForm';
import { ResetFormType } from '../../../../../utils/types/formik';

const validationSchema = Yup.object().shape({
  text: Yup.string().max(100, 'Must be not more than 100 characters').required('Required'),
});

type PropsType = {
  addMessage: (text: string) => void;
};
type FormDataType = {
  text: string;
};

export const MessageFormContainer = React.memo<PropsType>(({ addMessage }): ReactElement => {
  const onSubmit = (formData: FormDataType, { resetForm }: { resetForm: ResetFormType }): void => {
    addMessage(formData.text);
    resetForm();
  };

  return (
    <Formik initialValues={{ text: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleChange, errors, touched }): ReactElement => (
        <MessageForm handleChange={handleChange} errors={errors} touched={touched} disabled={Boolean(errors.text)} />
      )}
    </Formik>
  );
});
