import classes from './Contacts.module.scss';
import { Contact } from '../Contact/Contact';
import { FC, ReactElement } from 'react';
import { IContacts } from '../../../../../api/types/profile';

type PropsType = {
  contacts: IContacts;
};

export const Contacts: FC<PropsType> = ({ contacts }): ReactElement => {
  return (
    <div className={classes.contactsBlock}>
      <h5 className={classes.title}>Contacts:</h5>
      {Object.entries(contacts).map((contact: [string, string], index: number) => {
        return <Contact title={contact[0]} text={contact[1]} key={index} />;
      })}
    </div>
  );
};
