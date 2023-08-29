import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.scss';
import cn from 'classnames';

export const Dialog = ({name, id}) => {
  const setClass = ({isActive}) => cn(classes.dialog, {[classes.active]: isActive});
  const path = `/messages/${id}`;

  return (
    <NavLink to={path} className={setClass}>{name}</NavLink>
  );
};
