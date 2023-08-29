import classes from './Button.module.scss';

export const Button = ({buttonText}) => {
  return (
    <button className={classes.button}>{buttonText}</button>
  );
};
