import classes from './Contact.module.scss';

export const Contact = ({title, text}) => {
  return (
    <div className={classes.contact}>
      <b className={classes.title}>{title}:</b>
      <p className={classes.text}>{text || 'no contact'}</p>
    </div>
  );
};
