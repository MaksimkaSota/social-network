import { ErrorMessage, Field, Form } from 'formik';
import classes from './MessageForm.module.scss';
import { Button } from '../../../../Common/Button/Button';

export const MessageForm = ({isSubmitting}) => {
  return (
    <Form className={classes.addMessageBlock}>
      <div className={classes.fieldBlock}>
        <Field name={'text'} component={'textarea'} className={classes.inputMessage} placeholder={'Message text'} />
        <ErrorMessage name="text" component="p" className={classes.fieldError} />
      </div>
      <Button text={'Add message'} type={'submit'} disabled={isSubmitting} />
    </Form>
  );
};
