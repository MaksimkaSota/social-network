import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.scss';
import classNames from 'classnames';

export const Dialog = ({name, id}) => {
  const setClass = ({isActive}) => classNames(classes.dialog, {[classes.active]: isActive});
  const path = `/messages/${id}`;

  return (
    <NavLink to={path} className={setClass}>{name}</NavLink>
  );
};
