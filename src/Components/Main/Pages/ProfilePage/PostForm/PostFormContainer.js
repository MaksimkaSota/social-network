import { Formik } from 'formik';
import * as Yup from 'yup';
import { PostForm } from './PostForm';

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .max(100, 'Must be shorter than 100 characters')
    .required('Required')
});

export const PostFormContainer = ({addPost}) => {
  const onSubmit = (formData, {setSubmitting, resetForm}) => {
    setSubmitting(false);
    addPost(formData.text);
    resetForm();
  };

  return (
    <Formik
      initialValues={{text: ''}}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        ({isSubmitting}) => <PostForm isSubmitting={isSubmitting} />
      }
    </Formik>
  );
};
