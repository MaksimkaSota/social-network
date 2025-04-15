import type { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ProfileDataForm } from './ProfileDataForm';
import { replaceString } from '../../../../../utils/helpers/componentsHelpers';
import type { SetStatusType, SetSubmittingType } from '../../../../../utils/types/form';
import type { IRequestProfile } from '../../../../../utils/types/api';
import { validationText } from '../../../../../utils/languageLocalization/validationText';

const validationSchema = (languageMode: string) => {
  return Yup.object().shape({
    fullName: Yup.string()
      .min(3, replaceString(validationText.min[languageMode], { '%{number}': 3 }))
      .max(30, replaceString(validationText.max[languageMode], { '%{number}': 30 }))
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
