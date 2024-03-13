import type { ReactElement } from 'react';
import React from 'react';
import type { FormikHelpers } from 'formik';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { UsersSearchForm } from './UsersSearchForm';
import type { FilterType } from '../../../../../utils/types/common';
import type { SetSubmittingType } from '../../../../../utils/types/form';

const validationSchema = Yup.object().shape({
  term: Yup.string().max(50, 'Must be not more than 50 characters'),
});

type PropsType = {
  pageSize: number;
  filter: FilterType;
  getUsers: (
    currentPage: number,
    currentPageSize: number,
    currentFilter: FilterType,
    setSubmitting?: SetSubmittingType
  ) => void;
};
type FormDataType = FilterType;

export const UsersSearchFormContainer = React.memo<PropsType>(({ pageSize, filter, getUsers }): ReactElement => {
  const onSubmit = (formData: FormDataType, { setSubmitting }: FormikHelpers<FormDataType>): void => {
    getUsers(1, pageSize, formData, setSubmitting);
  };

  return (
    <Formik
      initialValues={{ term: filter.term, friend: filter.friend }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, errors, touched, isSubmitting }): ReactElement => (
        <UsersSearchForm handleChange={handleChange} errors={errors} touched={touched} isSubmitting={isSubmitting} />
      )}
    </Formik>
  );
});
