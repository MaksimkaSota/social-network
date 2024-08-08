import { memo } from 'react';
import type { ReactElement } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';
import { RoutePath } from '../../../utils/types/enums';

export const Navigation = memo((): ReactElement => {
  const setClass = ({ isActive }: { isActive: boolean }): string => cn(classes.link, { [classes.active]: isActive });

  return (
    <nav className={classes.navigation}>
      <NavLink className={setClass} to={RoutePath.profile}>
        Profile
      </NavLink>
      <NavLink className={setClass} to={RoutePath.publications}>
        Publications
      </NavLink>
      <NavLink className={setClass} to={RoutePath.users}>
        Users
      </NavLink>
      <NavLink className={setClass} to={RoutePath.chat}>
        Chat
      </NavLink>
    </nav>
  );
});
