import type { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './FormServerError.module.scss';

type PropsType = {
  name?: string;
  status: any;
  className: string;
};

export const FormServerError: FC<PropsType> = ({ status, name, className }): ReactElement => {
  const error = name ? status[name] : status;

  return <p className={cn(classes.formServerError, className)}>{error}</p>;
};
