import classes from './Preloader.module.scss';
import preloader from '../../../assets/images/preloader.svg';
import cn from 'classnames';

export const Preloader = ({className}) => {
  return (
    <img className={cn(classes.preloader, className)} src={preloader} alt="preloader" />
  );
};
