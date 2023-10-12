import classes from './Button.module.scss';
import cn from 'classnames';

export const Button = ({text, onClick, className, disabled}) => {
  return (
    <button onClick={onClick} className={cn(classes.button, className)} disabled={disabled}>{text}</button>
  );
};
