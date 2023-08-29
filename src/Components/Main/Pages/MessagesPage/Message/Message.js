import classes from './Message.module.scss';

export const Message = ({message}) => {
  return (
    <p className={classes.message}>{message}</p>
  );
};
