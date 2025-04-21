import type { FC, ReactElement } from 'react';
import classes from '../Contacts/Contacts.module.scss';
import { ContactForm } from '../ContactForm/ContactForm';
import type { HandleChangeType } from '../../../../../utils/types/form';
import type { IRequestProfile } from '../../../../../utils/types/api';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  data: IRequestProfile;
  status: any;
  handleChange: HandleChangeType;
  languageMode: string;
};

export const ContactsForm: FC<PropsType> = ({ data, status, handleChange, languageMode }): ReactElement => {
  return (
    <div className={classes.contactsBlock}>
      <h5 className={classes.title}>{contentText.contacts[languageMode]}:</h5>
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
