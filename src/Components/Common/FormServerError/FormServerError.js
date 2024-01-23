import cn from 'classnames';
import classes from './FormServerError.module.scss';

export const FormServerError = ({ status, name, className }) => {
  const error = name ? status[name] : status;

  return <p className={cn(classes.formServerError, className)}>{error}</p>;
};
