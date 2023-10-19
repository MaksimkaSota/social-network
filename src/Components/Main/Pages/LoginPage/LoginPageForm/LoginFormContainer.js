import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from './LoginForm';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required password'),
  password: Yup.string()
    .min(3, 'Must be longer than 3 characters')
    .max(10, 'Must be shorter than 10 characters')
    .required('Required password')
});

export const LoginFormContainer = () => {
  const onSubmit = (formData, {setSubmitting}) => {
    console.log(formData);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        ({isSubmitting}) => <LoginForm isSubmitting={isSubmitting} />
      }
    </Formik>
  );
};
