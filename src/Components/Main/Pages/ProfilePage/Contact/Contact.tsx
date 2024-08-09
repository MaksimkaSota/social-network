import type { FC, ReactElement } from 'react';
import classes from './Contact.module.scss';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  title: string;
  text: string;
  languageMode: string;
};

export const Contact: FC<PropsType> = ({ title, text, languageMode }): ReactElement => {
  return (
    <div className={classes.contact}>
      <b className={classes.title}>{title}:</b>
      <p className={classes.text}>{text || contentText.noContact[languageMode]}</p>
    </div>
  );
};
