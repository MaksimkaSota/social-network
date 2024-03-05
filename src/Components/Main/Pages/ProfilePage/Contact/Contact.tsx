import type { FC, ReactElement } from 'react';
import classes from './Contact.module.scss';

type PropsType = {
  title: string;
  text: string;
};

export const Contact: FC<PropsType> = ({ title, text }): ReactElement => {
  return (
    <div className={classes.contact}>
      <b className={classes.title}>{title}:</b>
      <p className={classes.text}>{text || 'no contact'}</p>
    </div>
  );
};
