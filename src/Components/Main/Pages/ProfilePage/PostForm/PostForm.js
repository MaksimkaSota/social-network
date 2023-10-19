import { ErrorMessage, Field, Form } from 'formik';
import classes from './PostForm.module.scss';
import { Button } from '../../../../Common/Button/Button';

export const PostForm = ({isSubmitting}) => {
  return (
    <Form className={classes.addPostBlock}>
      <div className={classes.fieldBlock}>
        <Field name={'text'} component={'textarea'} className={classes.inputPost} placeholder={'Post text'} />
        <ErrorMessage name="text" component="p" className={classes.fieldError} />
      </div>
      <Button text={'Add post'} type={'submit'} disabled={isSubmitting} />
    </Form>
  );
};
