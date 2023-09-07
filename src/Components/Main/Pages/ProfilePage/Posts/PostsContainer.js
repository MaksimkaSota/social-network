import { setPost, addPost  } from '../../../../../redux/actions/profile';
import { Posts } from './Posts';
import { useContext } from 'react';
import { StoreContext } from '../../../../Common/Context/StoreContext';

export const PostsContainer = () => {
  const store = useContext(StoreContext);
  const dispatch = store.dispatch;
  const state = store.getState();

  const onSetPost = (event) => {
    dispatch(setPost(event.target.value));
  };
  const onAddPost = () => {
    dispatch(addPost());
  };

  return (
    <Posts posts={state.profile.posts} postText={state.profile.postText} onSetPost={onSetPost} onAddPost={onAddPost} />
  );
};
