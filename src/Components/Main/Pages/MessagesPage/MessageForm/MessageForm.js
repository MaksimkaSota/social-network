import { Form } from 'formik';
import classes from './MessageForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';

export const MessageForm = ({isSubmitting}) => {
  return (
    <Form className={classes.addMessageBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputMessage}
        name={'text'}
        component={'textarea'}
        placeholder={'Message text'}
      />
      <Button text={'Add message'} type={'submit'} disabled={isSubmitting} />
    </Form>
  );
};
