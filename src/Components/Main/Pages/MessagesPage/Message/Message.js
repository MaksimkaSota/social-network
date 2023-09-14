import classes from './Message.module.scss';

export const Message = ({messageText}) => {
  return (
    <p className={classes.message}>{messageText}</p>
  );
};
