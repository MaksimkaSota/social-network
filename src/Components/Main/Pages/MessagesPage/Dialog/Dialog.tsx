import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './Dialog.module.scss';
import { FC, ReactElement } from 'react';

type PropsType = {
  name: string;
  id: number;
};

export const Dialog: FC<PropsType> = ({ name, id }): ReactElement => {
  const setClass = ({ isActive }: { isActive: boolean }): string => cn(classes.dialog, { [classes.active]: isActive });
  const path: string = `/messages/${id}`;

  return (
    <NavLink to={path} className={setClass}>
      {name}
    </NavLink>
  );
};
