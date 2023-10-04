import classes from './Button.module.scss';
import cn from 'classnames';

export const Button = ({text, onClick, extraClass}) => {
  return (
    <button onClick={onClick} className={cn(classes.button, extraClass)}>{text}</button>
  );
};
