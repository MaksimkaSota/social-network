import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PostForm } from './PostForm';

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .max(100, 'Must be not more than 100 characters')
    .required('Required')
});

export const PostFormContainer = React.memo(({addPost}) => {
  const onSubmit = (formData, {resetForm}) => {
    addPost(formData.text);
    resetForm();
  };

  return (
    <Formik
      initialValues={{text: ''}}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({handleChange, errors}) => <PostForm handleChange={handleChange} errors={errors} />}
    </Formik>
  );
});
