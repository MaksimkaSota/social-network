import classes from './Posts.module.scss';
import { Post } from '../Post/Post';
import { PostFormContainer } from '../PostForm/PostFormContainer';

export const Posts = ({posts, addPost, isAuth}) => {
  const postsElements = posts
    .map((post) => <Post postText={post.postText} key={post.id} />);

  if (isAuth) {
    return (
      <div className={classes.postsBlock}>
        <h3 className={classes.title}>Posts</h3>
        <PostFormContainer addPost={addPost} />
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    );
  }
};
