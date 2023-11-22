import { Contact } from '../Contact/Contact';
import classes from './Contacts.module.scss';

export const Contacts = ({contacts}) => {
  return (
    <div className={classes.contactsBlock}>
      <b className={classes.title}>Contacts:</b>
      {
        Object.entries(contacts).map((contact, index) => {
          return (
            <Contact title={contact[0]} value={contact[1]} key={index} />
          );
        })
      }
    </div>
  );
};
