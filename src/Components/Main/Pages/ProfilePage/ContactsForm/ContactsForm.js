import { ContactForm } from '../ContactForm/ContactForm';
import classes from '../Contacts/Contacts.module.scss';

export const ContactsForm = ({data, status, handleChange}) => {
  return (
    <div className={classes.contactsBlock}>
      <h5 className={classes.title}>Contacts:</h5>
      {
        Object.keys(data.contacts).map((contact, index) => {
          return (
            <ContactForm
              title={contact}
              name={`contacts.${contact}`}
              status={status}
              handleChange={handleChange}
              key={index}
            />
          );
        })
      }
    </div>
  );
};
