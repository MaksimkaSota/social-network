import classes from './FormServerError.module.scss';
import cn from 'classnames';

export const FormServerError = ({status, name, className}) => {
  return (
    <p className={cn(classes.formError, className)}>{status[name]}</p>
  );
};
