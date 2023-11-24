import classes from './Contacts.module.scss';
import { Contact } from '../Contact/Contact';

export const Contacts = ({contacts}) => {
  return (
    <div className={classes.contactsBlock}>
      <b className={classes.title}>Contacts:</b>
      {
        Object.entries(contacts).map((contact, index) => {
          return (
            <Contact title={contact[0]} text={contact[1]} key={index} />
          );
        })
      }
    </div>
  );
};
