import classes from './Button.module.scss';

export const Button = ({text, onClick, margin}) => {
  return (
    <button onClick={onClick} className={classes.button} style={margin}>{text}</button>
  );
};
