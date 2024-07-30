import type { FC, ReactElement } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from './LoginForm';
import type {
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType,
} from '../../../../../utils/types/form';

const validationSchema = (languageMode: string) => {
  return Yup.object().shape({
    email: Yup.string()
      .email(`${languageMode === 'en' ? 'Invalid email address' : 'Неверный адрес почты'}`)
      .required(`${languageMode === 'en' ? 'Required email address' : 'Обязательное поле ввода'}`),
    password: Yup.string()
      .min(3, `${languageMode === 'en' ? 'Must be not less than 3 symbols' : 'Должен быть не менее 3 символов'}`)
      .max(20, `${languageMode === 'en' ? 'Must be not more than 20 symbols' : 'Должен быть не более 20 символов'}`)
      .required(`${languageMode === 'en' ? 'Required password' : 'Обязательное поле ввода'}`),
    captcha: Yup.string().when('isCaptcha', {
      is: true,
      then: (captcha) => captcha.required(`${languageMode === 'en' ? 'Required captcha' : 'Обязательное поле ввода'}`),
    }),
  });
};

type PropsType = {
  login: (
    loginData: { email: string; password: string; rememberMe: boolean; captcha: string },
    setStatus: SetStatusType,
    setSubmitting: SetSubmittingType,
    setFieldValue: SetFieldValueType,
    setFieldTouched: SetFieldTouchedType
  ) => void;
  captchaUrl: string;
  languageMode: string;
};
type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
  isCaptcha: boolean;
};

export const LoginFormContainer: FC<PropsType> = ({ login, captchaUrl, languageMode }): ReactElement => {
  const onSubmit = (
    formData: FormDataType,
    { setStatus, setSubmitting, setFieldValue, setFieldTouched }: FormikHelpers<FormDataType>
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
      validationSchema={validationSchema(languageMode)}
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
          languageMode={languageMode}
        />
      )}
    </Formik>
  );
};
