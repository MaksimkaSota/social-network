import { FC, ReactElement } from 'react';
import classes from './Posts.module.scss';
import { Post } from '../Post/Post';
import { PostFormContainer } from '../PostForm/PostFormContainer';
import { PostType } from '../../../../../redux/types/posts';

type PropsType = {
  posts: Array<PostType>;
  addPost: (text: string) => void;
  isAuth: boolean;
};

export const Posts: FC<PropsType> = ({ posts, addPost, isAuth }): ReactElement | boolean => {
  const postsElements = posts.map((post: PostType): ReactElement => <Post postText={post.postText} key={post.id} />);

  return (
    isAuth && (
      <div className={classes.postsBlock}>
        <h3 className={classes.title}>Posts</h3>
        <PostFormContainer addPost={addPost} />
        <div className={classes.posts}>{postsElements}</div>
      </div>
    )
  );
};
