import classes from './NewsPage.module.scss';
import { FC, ReactElement } from 'react';

export const NewsPage: FC = (): ReactElement => {
  return <div className={classes.newsPageBlock}>News</div>;
};
