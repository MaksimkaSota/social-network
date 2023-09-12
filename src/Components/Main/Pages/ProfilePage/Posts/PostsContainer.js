import { addPost, setPost } from '../../../../../redux/actions/profile';
import { Posts } from './Posts';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

export const PostsContainer = () => {
  const posts = useSelector((state) => state.profile.posts);
  const postText = useSelector((state) => state.profile.postText);
  const dispatch = useDispatch();
  const setPostCallback = useCallback(
    (text) => dispatch(setPost(text)),
    [dispatch]
  );
  const addPostCallback = useCallback(
    (text) => dispatch(addPost(text)),
    [dispatch]
  );

  return (
    <Posts posts={posts} postText={postText} setPost={setPostCallback} addPost={addPostCallback} />
  );
};
