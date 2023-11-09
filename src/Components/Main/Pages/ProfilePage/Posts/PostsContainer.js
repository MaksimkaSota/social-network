import React from 'react';
import { addPost } from '../../../../../redux/actions/posts';
import { Posts } from './Posts';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { postsSelector } from '../../../../../redux/selectors/posts';
import { isAuthSelector } from '../../../../../redux/selectors/auth';

export const PostsContainer = React.memo(() => {
  const posts = useSelector(postsSelector);
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const addPostCallback = useCallback(
    (text) => dispatch(addPost(text)),
    [dispatch]
  );

  return (
    <Posts posts={posts} addPost={addPostCallback} isAuth={isAuth} />
  );
});
