import type { FC, ReactElement } from 'react';
import classes from './Publication.module.scss';

type PropsType = {
  text: string;
};

export const Publication: FC<PropsType> = ({ text }): ReactElement => {
  return <p className={classes.publication}>{text}</p>;
};
