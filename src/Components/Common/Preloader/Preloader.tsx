import cn from 'classnames';
import classes from './Preloader.module.scss';
import Loader from '../../../assets/images/loader.svg';
import { FC, ReactElement } from 'react';

type PropsType = { className?: string };

export const Preloader: FC<PropsType> = ({ className }): ReactElement => {
  return <Loader className={cn(classes.preloader, className)} />;
};
