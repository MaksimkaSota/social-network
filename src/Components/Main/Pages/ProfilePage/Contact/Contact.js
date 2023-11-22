import classes from './Contact.module.scss';

export const Contact = ({title, value}) => {
  return (
    <div className={classes.contact}>
      <b className={classes.title}>{title}:</b>
      <p className={classes.text}>{value || 'no contact'}</p>
    </div>
  );
};
