import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <h1 className={classes.headline}>Social Network</h1>
    </header>
  );
};
