import type { FC, ReactElement } from 'react';
import { Field, Form } from 'formik';
import classes from './UsersSearchForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import type { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../../../utils/types/form';
import { FormName } from '../../../../../utils/types/enums';
import type { Nullable } from '../../../../../utils/types/common';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  isSubmitting: boolean;
  authorizedUserId: Nullable<number>;
};

export const UsersSearchForm: FC<PropsType> = ({
  handleChange,
  errors,
  touched,
  isSubmitting,
  authorizedUserId,
}): ReactElement => {
  return (
    <Form className={classes.searchUsersBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputSearch}
        name={FormName.term}
        type="text"
        placeholder="User name"
        onChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <Field name={FormName.friend} component="select" className={classes.selectSearch}>
        <option value="" disabled={!authorizedUserId}>
          All
        </option>
        {authorizedUserId && <option value="true">Only followed</option>}
        {authorizedUserId && <option value="false">Only unfollowed</option>}
      </Field>
      <Button text="Find" type="submit" className={classes.searchButton} disabled={isSubmitting} />
    </Form>
  );
};
