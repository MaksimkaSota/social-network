import classes from './Button.module.scss';

export const Button = ({buttonText, callbackClick}) => {
  return (
    <button onClick={callbackClick} className={classes.button}>{buttonText}</button>
  );
};
