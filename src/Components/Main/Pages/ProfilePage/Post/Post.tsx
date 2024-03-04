import { FC, ReactElement } from 'react';
import classes from './Post.module.scss';

type PropsType = {
  postText: string;
};

export const Post: FC<PropsType> = ({ postText }): ReactElement => {
  return <p className={classes.post}>{postText}</p>;
};
