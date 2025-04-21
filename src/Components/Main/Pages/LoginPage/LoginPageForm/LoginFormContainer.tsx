import type { FC, ReactElement } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from './LoginForm';
import { replaceString } from '../../../../../utils/helpers/componentsHelpers';
import { FormName } from '../../../../../utils/types/enums';
import type {
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType,
} from '../../../../../utils/types/form';
import { validationText } from '../../../../../utils/languageLocalization/validationText';

const validationSchema = (languageMode: string) => {
  return Yup.object().shape({
    email: Yup.string().email(validationText.email[languageMode]).required(validationText.requiredEmail[languageMode]),
    password: Yup.string()
      .min(3, replaceString(validationText.min[languageMode], { '%{number}': 3 }))
      .max(30, replaceString(validationText.max[languageMode], { '%{number}': 30 }))
      .required(validationText.requiredPassword[languageMode]),
    captcha: Yup.string().when(FormName.is_captcha, {
      is: true,
      then: (captcha) => captcha.required(validationText.requiredCaptcha[languageMode]),
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
      {({ isSubmitting, status, setStatus, handleChange, errors, touched, validateForm }): ReactElement => (
        <LoginForm
          isSubmitting={isSubmitting}
          status={status}
          setStatus={setStatus}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          captchaUrl={captchaUrl}
          languageMode={languageMode}
          validateForm={validateForm}
        />
      )}
    </Formik>
  );
};
