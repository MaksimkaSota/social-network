import { memo } from 'react';
import type { ReactElement } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { UsersSearchForm } from './UsersSearchForm';
import type { FilterType, Nullable } from '../../../../../utils/types/common';
import type { SetSubmittingType } from '../../../../../utils/types/form';

const validationSchema = Yup.object().shape({
  term: Yup.string().max(50, 'Must be not more than 50 characters'),
});

type PropsType = {
  page: number;
  pageSize: number;
  filter: FilterType;
  authorizedUserId: Nullable<number>;
  getUsers: (
    currentPage: number,
    currentPageSize: number,
    currentFilter: FilterType,
    setSubmitting?: SetSubmittingType
  ) => void;
};
type FormDataType = FilterType;

export const UsersSearchFormContainer = memo<PropsType>(
  ({ page, pageSize, filter, authorizedUserId, getUsers }): ReactElement => {
    const onSubmit = (formData: FormDataType, { setSubmitting }: FormikHelpers<FormDataType>): void => {
      let currentPage = page;
      if (formData.term !== filter.term || formData.friend !== filter.friend) {
        currentPage = 1;
      }
      getUsers(currentPage, pageSize, formData, setSubmitting);
    };

    return (
      <Formik
        initialValues={{ term: filter.term, friend: filter.friend }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, errors, touched, isSubmitting }): ReactElement => (
          <UsersSearchForm
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
            authorizedUserId={authorizedUserId}
          />
        )}
      </Formik>
    );
  }
);
