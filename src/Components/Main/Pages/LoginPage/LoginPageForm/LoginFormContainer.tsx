import type { FC, ReactElement } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from './LoginForm';
import type {
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType,
} from '../../../../../utils/types/form';

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

type PropsType = {
  login: (
    loginData: { email: string; password: string; rememberMe: boolean; captcha: string },
    setStatus: SetStatusType,
    setSubmitting: SetSubmittingType,
    setFieldValue: SetFieldValueType,
    setFieldTouched: SetFieldTouchedType
  ) => void;
  captchaUrl: string;
};
type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

export const LoginFormContainer: FC<PropsType> = ({ login, captchaUrl }): ReactElement => {
  const onSubmit = (
    formData: FormDataType,
    {
      setStatus,
      setSubmitting,
      setFieldValue,
      setFieldTouched,
    }: {
      setStatus: SetStatusType;
      setSubmitting: SetSubmittingType;
      setFieldValue: SetFieldValueType;
      setFieldTouched: SetFieldTouchedType;
    }
  ): void => {
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
      {({ isSubmitting, status, handleChange, errors, touched }): ReactElement => (
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
