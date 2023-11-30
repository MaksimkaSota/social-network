import classes from './Preloader.module.scss';
import cn from 'classnames';
import Loader from '../../../assets/images/loader.svg';

export const Preloader = ({className}) => {
  return (
    <Loader className={cn(classes.preloader, className)} />
  );
};
