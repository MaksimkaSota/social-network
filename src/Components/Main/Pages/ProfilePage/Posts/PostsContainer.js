import { addPost } from '../../../../../redux/actions/profile';
import { Posts } from './Posts';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

export const PostsContainer = () => {
  const posts = useSelector((state) => state.profile.posts);
  const dispatch = useDispatch();
  const addPostCallback = useCallback(
    (text) => dispatch(addPost(text)),
    [dispatch]
  );

  return (
    <Posts posts={posts} addPost={addPostCallback} />
  );
};
