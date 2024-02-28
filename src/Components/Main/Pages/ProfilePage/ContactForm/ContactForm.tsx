import cn from 'classnames';
import classes from './ContactForm.module.scss';
import { FormField } from '../../../../Common/FormField/FormField';
import { FormServerError } from '../../../../Common/FormServerError/FormServerError';
import { HandleChangeType } from '../../../../../utils/types/formik';
import { FC, ReactElement } from 'react';

type PropsType = {
  title: string;
  name: string;
  status: any;
  handleChange: HandleChangeType;
};

export const ContactForm: FC<PropsType> = ({ title, name, status, handleChange }): ReactElement => {
  return (
    <div className={classes.contactBlock}>
      <div className={classes.contact}>
        <b className={classes.title}>{title}:</b>
        <FormField
          classNameField={cn(classes.field, { [classes.fieldError]: status?.contacts?.[title] })}
          name={name}
          type="text"
          placeholder={title}
          onChange={handleChange}
        />
      </div>
      {status?.contacts?.[title] && <FormServerError name={title} status={status.contacts} className={classes.error} />}
    </div>
  );
};
