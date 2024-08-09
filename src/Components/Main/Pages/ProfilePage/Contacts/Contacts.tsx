import type { FC, ReactElement } from 'react';
import classes from './Contacts.module.scss';
import { Contact } from '../Contact/Contact';
import type { IContacts } from '../../../../../utils/types/api';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  contacts: IContacts;
  languageMode: string;
};

export const Contacts: FC<PropsType> = ({ contacts, languageMode }): ReactElement => {
  return (
    <div className={classes.contactsBlock}>
      <h5 className={classes.title}>{contentText.contacts[languageMode]}:</h5>
      {Object.entries(contacts).map((contact: [string, string], index: number): ReactElement => {
        return <Contact title={contact[0]} text={contact[1]} languageMode={languageMode} key={index} />;
      })}
    </div>
  );
};
