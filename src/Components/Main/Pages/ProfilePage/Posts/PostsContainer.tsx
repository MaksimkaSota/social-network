import { useCallback, memo } from 'react';
import type { ReactElement } from 'react';
import { addPost } from '../../../../../redux/actions/posts';
import { Posts } from './Posts';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../../hooks/useTypedDispatch';
import { postsSelector, authSelector } from '../../../../../redux/selectors/selectors';

export const PostsContainer = memo((): ReactElement => {
  const { posts } = useTypedSelector(postsSelector);
  const { isAuth } = useTypedSelector(authSelector);

  const dispatch = useTypedDispatch();
  const addPostCallback = useCallback((text: string) => dispatch(addPost(text)), [dispatch]);

  return <Posts posts={posts} addPost={addPostCallback} isAuth={isAuth} />;
});
