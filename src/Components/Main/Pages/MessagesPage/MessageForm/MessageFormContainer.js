import { Formik } from 'formik';
import * as Yup from 'yup';
import { MessageForm } from './MessageForm';

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .max(100, 'Must be not more than 100 characters')
    .required('Required')
});

export const MessageFormContainer = ({addMessage}) => {
  const onSubmit = (formData, {resetForm}) => {
    addMessage(formData.text);
    resetForm();
  };

  return (
    <Formik
      initialValues={{text: ''}}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <MessageForm />}
    </Formik>
  );
};
