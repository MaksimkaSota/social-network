import classNames from 'classnames';
import classes from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <a className={classNames(classes.active, classes.link)} href="#">Profile</a>
      <a className={classes.link} href="#">Messages</a>
      <a className={classes.link} href="#">Users</a>
      <a className={classes.link} href="#">News</a>
      <a className={classes.link} href="#">Musics</a>
      <a className={classes.link} href="#">Settings</a>
    </nav>
  );
};
