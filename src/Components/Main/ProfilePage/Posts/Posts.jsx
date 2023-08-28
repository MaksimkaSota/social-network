import classes from './Posts.module.scss';
import { Post } from '../Post/Post';

export const Posts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>My posts</h3>
      <div className={classes.addPostBlock}>
        <textarea className={classes.inputPost}></textarea>
        <button className={classes.addPost}>Add post</button>
      </div>
      <Post message='Hi, Max '/>
      <Post message='Hi, Eugene' />
      <Post message='Hi, Yuri' />
      <Post message='Hi, Alexei' />
      <Post message='Hi, Andrey' />
    </div>
  );
};
