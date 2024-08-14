import { memo } from 'react';
import type { ReactElement } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { UsersSearchForm } from './UsersSearchForm';
import type { FilterType, Nullable } from '../../../../../utils/types/common';
import { validationText } from '../../../../../utils/languageLocalization/validationText';
import { replaceString } from '../../../../../utils/helpers/componentsHelpers';

const validationSchema = (languageMode: string) => {
  return Yup.object().shape({
    term: Yup.string().max(30, replaceString(validationText.max[languageMode], { '%{number}': 30 })),
  });
};

type PropsType = {
  page: number;
  filter: FilterType;
  authorizedUserId: Nullable<number>;
  setPage: (currentPage: number) => void;
  setFilter: (term: string, friend: string) => void;
  isFetching: boolean;
  languageMode: string;
};
type FormDataType = FilterType;

export const UsersSearchFormContainer = memo<PropsType>(
  ({ page, filter, authorizedUserId, setPage, setFilter, isFetching, languageMode }): ReactElement => {
    const onSubmit = (formData: FormDataType): void => {
      let currentPage = page;
      if (formData.term !== filter.term || formData.friend !== filter.friend) {
        currentPage = 1;
      }
      setPage(currentPage);
      setFilter(formData.term, formData.friend);
    };

    return (
      <Formik
        initialValues={{ term: filter.term, friend: filter.friend }}
        validationSchema={validationSchema(languageMode)}
        onSubmit={onSubmit}
      >
        {({ handleChange, errors, touched, validateForm }): ReactElement => (
          <UsersSearchForm
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            isFetching={isFetching}
            authorizedUserId={authorizedUserId}
            languageMode={languageMode}
            validateForm={validateForm}
          />
        )}
      </Formik>
    );
  }
);
