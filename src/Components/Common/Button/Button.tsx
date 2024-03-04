import { FC, ReactElement } from 'react';
import cn from 'classnames';
import classes from './Button.module.scss';

type PropsType = {
  text: number | string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<PropsType> = ({
  text,
  type = 'button',
  className,
  onClick,
  disabled = false,
}): ReactElement => {
  return (
    <button type={type} className={cn(classes.button, className)} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
