import classes from './Preloader.module.scss';
import preloader from '../../../assets/images/preloader.svg';

export const Preloader = () => {
  return (
    <img className={classes.preloader} src={preloader} alt="preloader" />
  );
};
