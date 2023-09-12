import { Posts } from './Posts';
import { useSelector } from 'react-redux';
import { useActions } from '../../../../../utils/hooks/useActions';

export const PostsContainer = () => {
  const posts = useSelector((state) => state.profile.posts);
  const postText = useSelector((state) => state.profile.postText);
  const {setPost, addPost} = useActions();

  return (
    <Posts posts={posts} postText={postText} setPost={setPost} addPost={addPost} />
  );
};
