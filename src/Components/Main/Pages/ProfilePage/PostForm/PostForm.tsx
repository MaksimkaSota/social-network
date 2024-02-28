import { Form } from 'formik';
import classes from './PostForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormikErrorsType, FormikTouchedType, HandleChangeType } from '../../../../../utils/types/formik';
import { FC, ReactElement } from 'react';

type PropsType = {
  handleChange: HandleChangeType;
  errors: FormikErrorsType;
  touched: FormikTouchedType;
  disabled: boolean;
};

export const PostForm: FC<PropsType> = ({ handleChange, errors, touched, disabled }): ReactElement => {
  return (
    <Form className={classes.addPostBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputPost}
        name="text"
        component="textarea"
        placeholder="Post text"
        onChange={handleChange}
        errors={errors}
        touched={touched}
      />
      <Button text="Add post" type="submit" disabled={disabled} />
    </Form>
  );
};
