import React, { ReactElement } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PostForm } from './PostForm';
import { ResetFormType } from '../../../../../utils/types/form';

const validationSchema = Yup.object().shape({
  text: Yup.string().max(100, 'Must be not more than 100 characters').required('Required'),
});

type PropsType = {
  addPost: (text: string) => void;
};
type FormDataType = {
  text: string;
};

export const PostFormContainer = React.memo<PropsType>(({ addPost }): ReactElement => {
  const onSubmit = (formData: FormDataType, { resetForm }: { resetForm: ResetFormType }): void => {
    addPost(formData.text);
    resetForm();
  };

  return (
    <Formik initialValues={{ text: '' }} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleChange, errors, touched }): ReactElement => (
        <PostForm handleChange={handleChange} errors={errors} touched={touched} disabled={Boolean(errors.text)} />
      )}
    </Formik>
  );
});
