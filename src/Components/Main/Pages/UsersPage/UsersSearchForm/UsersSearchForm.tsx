import { useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import { Field, Form } from 'formik';
import classes from './UsersSearchForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import type {
  FormikErrorsType,
  FormikTouchedType,
  HandleChangeType,
  ValidateFormType,
} from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';
import type { Nullable } from '../../../../../utils/types/common';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  isFetching: boolean;
  authorizedUserId: Nullable<number>;
  languageMode: string;
  validateForm: ValidateFormType;
};

export const UsersSearchForm: FC<PropsType> = ({
  handleChange,
  errors,
  touched,
  isFetching,
  authorizedUserId,
  languageMode,
  validateForm,
}): ReactElement => {
  useEffect(() => {
    validateForm();
    // eslint-disable-next-line
  }, [languageMode]);

  return (
    <Form className={classes.searchUsersBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputSearch}
        name={FormName.term}
        type="text"
        placeholder={contentText.userName[languageMode]}
        onChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <Field name={FormName.friend} component="select" className={classes.selectSearch}>
        <option value="" disabled={!authorizedUserId}>
          {contentText.all[languageMode]}
        </option>
        {authorizedUserId && <option value="true">{contentText.followed[languageMode]}</option>}
        {authorizedUserId && <option value="false">{contentText.unfollowed[languageMode]}</option>}
      </Field>
      <Button
        text={contentText.findUserBtn[languageMode]}
        type="submit"
        className={classes.searchButton}
        disabled={isFetching}
      />
    </Form>
  );
};
