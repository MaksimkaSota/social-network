import cn from 'classnames';
import classes from './Button.module.scss';

export const Button = ({ text, type = 'button', className, onClick, disabled = false }) => {
  return (
    <button type={type} className={cn(classes.button, className)} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
