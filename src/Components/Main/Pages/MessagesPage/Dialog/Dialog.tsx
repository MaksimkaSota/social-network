import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './Dialog.module.scss';

export const Dialog = ({ name, id }) => {
  const setClass = ({ isActive }) => cn(classes.dialog, { [classes.active]: isActive });
  const path = `/messages/${id}`;

  return (
    <NavLink to={path} className={setClass}>
      {name}
    </NavLink>
  );
};
