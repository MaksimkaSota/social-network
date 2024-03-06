import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from './LoginForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required email address'),
  password: Yup.string()
    .min(3, 'Must be not less than 3 characters')
    .max(20, 'Must be not more than 20 characters')
    .required('Required password'),
  captcha: Yup.string().when('isCaptcha', {
    is: true,
    then: (captcha) => captcha.required('Required captcha'),
  }),
});

export const LoginFormContainer = ({ login, captchaUrl }) => {
  const onSubmit = (formData, { setStatus, setSubmitting, setFieldValue, setFieldTouched }) => {
    login(formData, setStatus, setSubmitting, setFieldValue, setFieldTouched);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        captcha: '',
        isCaptcha: false,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, status, handleChange, errors, touched }) => (
        <LoginForm
          isSubmitting={isSubmitting}
          status={status}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          captchaUrl={captchaUrl}
        />
      )}
    </Formik>
  );
};
