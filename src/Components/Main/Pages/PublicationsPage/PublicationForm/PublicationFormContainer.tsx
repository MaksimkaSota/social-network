import { memo, type ReactElement } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { PublicationForm } from './PublicationForm';
import { replaceString } from '../../../../../utils/helpers/componentsHelpers';
import { validationText } from '../../../../../utils/languageLocalization/validationText';

const validationSchema = (languageMode: string) => {
  return Yup.object().shape({
    text: Yup.string()
      .max(100, replaceString(validationText.max[languageMode], { '%{number}': 100 }))
      .required(validationText.requiredPublication[languageMode]),
  });
};

type PropsType = {
  buttonText: string;
  addPublication: (text: string) => void;
  languageMode: string;
};
type FormDataType = {
  text: string;
};

export const PublicationFormContainer = memo<PropsType>(
  ({ buttonText, addPublication, languageMode }): ReactElement => {
    const onSubmit = (formData: FormDataType, { resetForm }: FormikHelpers<FormDataType>): void => {
      addPublication(formData.text);
      resetForm();
    };

    return (
      <Formik initialValues={{ text: '' }} validationSchema={validationSchema(languageMode)} onSubmit={onSubmit}>
        {({ handleChange, errors, touched, isValid, dirty, validateForm }): ReactElement => (
          <PublicationForm
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            isValid={isValid}
            dirty={dirty}
            buttonText={buttonText}
            languageMode={languageMode}
            validateForm={validateForm}
          />
        )}
      </Formik>
    );
  }
);
