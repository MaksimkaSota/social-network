import classes from './Button.module.scss';
import cn from 'classnames';

export const Button = ({text, onClick, className}) => {
  return (
    <button onClick={onClick} className={cn(classes.button, className)}>{text}</button>
  );
};
