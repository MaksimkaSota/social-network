import { ProfileDataForm } from './ProfileDataForm';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Must be not less than 3 characters')
    .max(30, 'Must be not more than 30 characters')
    .required('Required password')
});

export const ProfileDataFormContainer = ({data, updateData, setEditModeData}) => {
  const initialValue = {
    fullName: data.fullName || '',
    lookingForAJob: data.lookingForAJob || false,
    lookingForAJobDescription: data.lookingForAJobDescription || '',
    aboutMe: data.aboutMe || '',
    contacts: {
      facebook: data.facebook || '',
      website: data.website || '',
      vk: data.vk || '',
      twitter: data.twitter || '',
      instagram: data.instagram || '',
      youtube: data.youtube || '',
      github: data.github || '',
      mainLink: data.mainLink || ''
    }
  };

  const dataKeys = Object.keys(initialValue);
  const contactsDataKeys = Object.keys(initialValue.contacts);

  const onSubmit = (formData, {setStatus, setSubmitting}) => {
    updateData(formData, setStatus, setSubmitting, setEditModeData, dataKeys, contactsDataKeys);
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting, status, handleChange, setFieldValue}) => (
        <ProfileDataForm
          data={data}
          isSubmitting={isSubmitting}
          status={status}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
      )}
    </Formik>
  );
};
