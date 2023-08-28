import classes from './Post.module.scss';

export const Post = ({message}) => {
  return (
    <p className={classes.post}>{message}</p>
  );
};
