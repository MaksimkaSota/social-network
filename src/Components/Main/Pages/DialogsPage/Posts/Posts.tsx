import type { FC, ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import classes from './Posts.module.scss';
import { Post } from '../Post/Post';
import { PostFormContainer } from '../PostForm/PostFormContainer';
import type { PostType } from '../../../../../utils/types/common';
import { scrollToBottom } from '../../../../../utils/helpers/componentHelpers';

type PropsType = {
  posts: PostType[];
  addPost: (text: string) => void;
};

export const Posts: FC<PropsType> = ({ posts, addPost }): ReactElement | boolean => {
  const postsElements = posts.map((post: PostType): ReactElement => <Post postText={post.postText} key={post.id} />);

  const anchorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollToBottom(anchorRef);
  }, [posts]);

  return (
    <div className={classes.postsBlock}>
      <h3 className={classes.title}>Posts</h3>
      <PostFormContainer addPost={addPost} />
      <div className={classes.posts} ref={anchorRef}>
        {postsElements}
      </div>
    </div>
  );
};
