import classes from './Button.module.scss';

export const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={classes.button}>{text}</button>
  );
};
