import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

export const Navigation = () => {
  const setClass = ({ isActive }) => cn(classes.link, { [classes.active]: isActive });

  return (
    <nav className={classes.navigation}>
      <NavLink className={setClass} to="/profile">
        Profile
      </NavLink>
      <NavLink className={setClass} to="/messages">
        Messages
      </NavLink>
      <NavLink className={setClass} to="/users">
        Users
      </NavLink>
      <NavLink className={setClass} to="/news">
        News
      </NavLink>
      <NavLink className={setClass} to="/musics">
        Musics
      </NavLink>
      <NavLink className={setClass} to="/settings">
        Settings
      </NavLink>
    </nav>
  );
};
