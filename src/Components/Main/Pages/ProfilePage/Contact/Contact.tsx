import classes from './Contact.module.scss';
import { FC, ReactElement } from 'react';

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
