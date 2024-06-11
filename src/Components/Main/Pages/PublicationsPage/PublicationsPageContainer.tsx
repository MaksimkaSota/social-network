import type { FC, ReactElement } from 'react';
import { useCallback } from 'react';
import { PublicationsPage } from './PublicationsPage';
import { addMessage, addPost } from '../../../../redux/actions/publications';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { publicationsSelector } from '../../../../redux/selectors/selectors';

const PublicationsPageContainer: FC = (): ReactElement => {
  const { messages, posts } = useTypedSelector(publicationsSelector);

  const dispatch = useTypedDispatch();
  const addMessageCallback = useCallback((text: string) => dispatch(addMessage(text)), [dispatch]);
  const addPostCallback = useCallback((text: string) => dispatch(addPost(text)), [dispatch]);

  return (
    <PublicationsPage messages={messages} posts={posts} addMessage={addMessageCallback} addPost={addPostCallback} />
  );
};

export default PublicationsPageContainer;
