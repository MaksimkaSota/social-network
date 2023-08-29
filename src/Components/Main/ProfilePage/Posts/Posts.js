import classes from './Posts.module.scss';
import { Post } from '../Post/Post';
import { Button } from '../../../Common/Button/Button';

export const Posts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>My posts</h3>
      <div className={classes.addPostBlock}>
        <textarea className={classes.inputPost}></textarea>
        <Button buttonText='Add post' />
      </div>
      <Post message='Hi, Max '/>
      <Post message='Hi, Eugene' />
      <Post message='Hi, Yuri' />
      <Post message='Hi, Alexei' />
      <Post message='Hi, Andrey' />
    </div>
  );
};
