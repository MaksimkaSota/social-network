import classes from './Post.module.scss';

export const Post = ({postText}) => {
  return (
    <p className={classes.post}>{postText}</p>
  );
};
