import classes from './Button.module.scss';
import cn from 'classnames';

export const Button = ({text, type = 'button', className, onClick, disabled = false}) => {
  return (
    <button type={type} className={cn(classes.button, className)} onClick={onClick} disabled={disabled}>{text}</button>
  );
};
