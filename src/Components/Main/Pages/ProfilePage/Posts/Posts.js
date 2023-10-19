import classes from './Posts.module.scss';
import { Post } from '../Post/Post';
import { PostFormContainer } from '../PostForm/PostFormContainer';

export const Posts = ({posts, addPost}) => {
  const postsElements = posts
    .map((post) => <Post postText={post.postText} key={post.id} />);

  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>My posts</h3>
      <PostFormContainer addPost={addPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};
