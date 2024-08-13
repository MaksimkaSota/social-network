import type { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ProfileDataForm } from './ProfileDataForm';
import type { SetStatusType, SetSubmittingType } from '../../../../../utils/types/form';
import type { IRequestProfile } from '../../../../../utils/types/api';
import { validationText } from '../../../../../utils/languageLocalization/validationText';

const validationSchema = (languageMode: string) => {
  return Yup.object().shape({
    fullName: Yup.string()
      .min(3, validationText.min3[languageMode])
      .max(30, validationText.max30[languageMode])
      .required(validationText.requiredName[languageMode]),
  });
};

type PropsType = {
  data: IRequestProfile;
  updateData: (
    profileData: IRequestProfile,
    setStatus: SetStatusType,
    setSubmitting: SetSubmittingType,
    setEditModeData: Dispatch<SetStateAction<boolean>>
  ) => void;
  setEditModeData: Dispatch<SetStateAction<boolean>>;
  languageMode: string;
};
type FormDataType = IRequestProfile;

export const ProfileDataFormContainer: FC<PropsType> = ({
  data,
  updateData,
  setEditModeData,
  languageMode,
}): ReactElement => {
  const onSubmit = (formData: FormDataType, { setStatus, setSubmitting }: FormikHelpers<FormDataType>): void => {
    updateData(formData, setStatus, setSubmitting, setEditModeData);
  };

  return (
    <Formik initialValues={data} validationSchema={validationSchema(languageMode)} onSubmit={onSubmit}>
      {({ isSubmitting, status, setStatus, handleChange, setFieldValue, errors, validateForm }): ReactElement => (
        <ProfileDataForm
          data={data}
          isSubmitting={isSubmitting}
          status={status}
          setStatus={setStatus}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          errors={errors}
          languageMode={languageMode}
          validateForm={validateForm}
        />
      )}
    </Formik>
  );
};
