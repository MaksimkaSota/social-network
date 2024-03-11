import type { FC, ReactElement } from 'react';
import classes from './NewsPage.module.scss';

export const NewsPage: FC = (): ReactElement => {
  return <div className={classes.newsPageBlock}>News</div>;
};
