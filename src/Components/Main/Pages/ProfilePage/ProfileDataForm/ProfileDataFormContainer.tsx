import { Formik } from 'formik';
import * as Yup from 'yup';
import { ProfileDataForm } from './ProfileDataForm';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Must be not less than 3 characters')
    .max(30, 'Must be not more than 30 characters')
    .required('Required password'),
});

export const ProfileDataFormContainer = ({ data, updateData, setEditModeData }) => {
  const onSubmit = (formData, { setStatus, setSubmitting }) => {
    updateData(formData, setStatus, setSubmitting, setEditModeData);
  };

  return (
    <Formik initialValues={data} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting, status, handleChange, setFieldValue, errors }) => (
        <ProfileDataForm
          data={data}
          isSubmitting={isSubmitting}
          status={status}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          errors={errors}
        />
      )}
    </Formik>
  );
};
