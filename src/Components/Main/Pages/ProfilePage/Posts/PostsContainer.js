import { addPost } from '../../../../../redux/actions/profile';
import { Posts } from './Posts';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { postsSelector } from '../../../../../redux/selectors/profile';

export const PostsContainer = () => {
  const posts = useSelector(postsSelector);
  const dispatch = useDispatch();
  const addPostCallback = useCallback(
    (text) => dispatch(addPost(text)),
    [dispatch]
  );

  return (
    <Posts posts={posts} addPost={addPostCallback} />
  );
};
