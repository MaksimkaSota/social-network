import type { FC, ReactElement } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import classes from '../Contacts/Contacts.module.scss';
import type { HandleChangeType } from '../../../../../utils/types/form';
import type { IRequestProfile } from '../../../../../utils/types/api';

type PropsType = {
  data: IRequestProfile;
  status: any;
  handleChange: HandleChangeType;
};

export const ContactsForm: FC<PropsType> = ({ data, status, handleChange }): ReactElement => {
  return (
    <div className={classes.contactsBlock}>
      <h5 className={classes.title}>Contacts:</h5>
      {Object.keys(data.contacts).map((contact: string, index: number): ReactElement => {
        return (
          <ContactForm
            title={contact}
            name={`contacts.${contact}`}
            status={status}
            handleChange={handleChange}
            key={index}
          />
        );
      })}
    </div>
  );
};
