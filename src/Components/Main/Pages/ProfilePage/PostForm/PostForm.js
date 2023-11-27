import { Form } from 'formik';
import classes from './PostForm.module.scss';
import { Button } from '../../../../Common/Button/Button';
import { FormField } from '../../../../Common/FormField/FormField';

export const PostForm = ({handleChange}) => {
  return (
    <Form className={classes.addPostBlock}>
      <FormField
        classNameFormField={classes.fieldBlock}
        classNameField={classes.inputPost}
        name="text"
        component="textarea"
        placeholder="Post text"
        onChange={handleChange} />
      <Button text="Add post" type="submit" />
    </Form>
  );
};
