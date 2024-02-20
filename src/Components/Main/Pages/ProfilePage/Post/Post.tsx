import classes from './Post.module.scss';
import { FC, ReactElement } from 'react';

type PropsType = {
  postText: string;
};

export const Post: FC<PropsType> = ({ postText }): ReactElement => {
  return <p className={classes.post}>{postText}</p>;
};
