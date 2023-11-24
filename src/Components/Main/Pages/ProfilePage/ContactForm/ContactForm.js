import classes from './ContactForm.module.scss';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';

export const ContactForm = ({title, name, status, handleChange}) => {
  return (
    <div className={classes.contactBlock}>
      <div className={classes.contact}>
        <b className={classes.title}>{title}:</b>
        <FormField classNameField={classes.field}
                   name={name}
                   type={'text'}
                   placeholder={title}
                   onChange={handleChange} />
      </div>
      {
        (status && status.contacts && status.contacts[title]) &&
        <FormServerError name={title} status={status.contacts} className={classes.error} />
      }
    </div>
  );
};
