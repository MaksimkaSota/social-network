import { memo } from 'react';
import type { ReactElement } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { PublicationForm } from './PublicationForm';

const validationSchema = Yup.object().shape({
  text: Yup.string().max(100, 'Must be not more than 100 characters').required('Required'),
});

type PropsType = {
  buttonText: string;
  addPublication: (text: string) => void;
};
type FormDataType = {
  text: string;
};

export const PublicationFormContainer = memo<PropsType>(({ buttonText, addPublication }): ReactElement => {
  const onSubmit = (formData: FormDataType, { resetForm }: FormikHelpers<FormDataType>): void => {
    addPublication(formData.text);
    resetForm();
  };

  return (
    <Formik initialValues={{ text: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleChange, errors, touched, isValid, dirty }): ReactElement => (
        <PublicationForm
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          isValid={isValid}
          dirty={dirty}
          buttonText={buttonText}
        />
      )}
    </Formik>
  );
});
