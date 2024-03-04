import { FC, ReactElement } from 'react';
import { Form } from 'formik';
import classes from './PostForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormikErrorsType, FormikTouchedType, FormName, HandleChangeType } from '../../../../../utils/types/form';

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
        name={FormName.text}
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
