import type { ReactElement } from 'react';
import React, { useCallback } from 'react';
import { addPost } from '../../../../../redux/actions/posts';
import { Posts } from './Posts';
import { postsSelector } from '../../../../../redux/selectors/posts';
import { isAuthSelector } from '../../../../../redux/selectors/auth';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../../hooks/useTypedDispatch';

export const PostsContainer = React.memo((): ReactElement => {
  const posts = useTypedSelector(postsSelector);
  const isAuth = useTypedSelector(isAuthSelector);
  const dispatch = useTypedDispatch();
  const addPostCallback = useCallback((text: string) => dispatch(addPost(text)), [dispatch]);

  return <Posts posts={posts} addPost={addPostCallback} isAuth={isAuth} />;
});
