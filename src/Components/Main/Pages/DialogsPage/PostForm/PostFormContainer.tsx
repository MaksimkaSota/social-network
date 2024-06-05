import { memo } from 'react';
import type { ReactElement } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { PostForm } from './PostForm';

const validationSchema = Yup.object().shape({
  text: Yup.string().max(100, 'Must be not more than 100 characters').required('Required'),
});

type PropsType = {
  addPost: (text: string) => void;
};
type FormDataType = {
  text: string;
};

export const PostFormContainer = memo<PropsType>(({ addPost }): ReactElement => {
  const onSubmit = (formData: FormDataType, { resetForm }: FormikHelpers<FormDataType>): void => {
    addPost(formData.text);
    resetForm();
  };

  return (
    <Formik initialValues={{ text: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleChange, errors, touched, isValid, dirty }): ReactElement => (
        <PostForm handleChange={handleChange} errors={errors} touched={touched} isValid={isValid} dirty={dirty} />
      )}
    </Formik>
  );
});
