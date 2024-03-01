import { Formik } from 'formik';
import * as Yup from 'yup';
import { ProfileDataForm } from './ProfileDataForm';
import { IRequestProfile } from '../../../../../api/types/profile';
import { SetStatusType, SetSubmittingType } from '../../../../../utils/types/form';
import { Dispatch, FC, ReactElement, SetStateAction } from 'react';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Must be not less than 3 characters')
    .max(30, 'Must be not more than 30 characters')
    .required('Required password'),
});

type PropsType = {
  data: IRequestProfile;
  updateData: (
    profileData: IRequestProfile,
    setStatus: SetStatusType,
    setSubmitting: SetSubmittingType,
    setEditModeData: Dispatch<SetStateAction<boolean>>
  ) => void;
  setEditModeData: Dispatch<SetStateAction<boolean>>;
};
type FormDataType = IRequestProfile;

export const ProfileDataFormContainer: FC<PropsType> = ({ data, updateData, setEditModeData }): ReactElement => {
  const onSubmit = (
    formData: FormDataType,
    {
      setStatus,
      setSubmitting,
    }: {
      setStatus: SetStatusType;
      setSubmitting: SetSubmittingType;
    }
  ): void => {
    updateData(formData, setStatus, setSubmitting, setEditModeData);
  };

  return (
    <Formik initialValues={data} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting, status, handleChange, setFieldValue, errors }): ReactElement => (
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
