import classes from './Posts.module.scss';
import { Post } from '../Post/Post';
import { Button } from '../../../../Common/Button/Button';

export const Posts = ({posts, postText, onSetPost, onAddPost}) => {
  const postsElements = posts
    .map((post, index) => <Post postText={post.postText} key={index} />);

  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>My posts</h3>
      <div className={classes.addPostBlock}>
        <textarea onChange={onSetPost} className={classes.inputPost} value={postText} />
        <Button callbackClick={onAddPost} buttonText="Add post" />
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};
