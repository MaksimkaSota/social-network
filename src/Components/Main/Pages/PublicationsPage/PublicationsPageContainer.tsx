import type { FC, ReactElement } from 'react';
import { useCallback } from 'react';
import { PublicationsPage } from './PublicationsPage';
import { addMessage, addPost } from '../../../../redux/actions/publications';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { publicationsSelector, viewSelector } from '../../../../redux/selectors/selectors';
import { useViewParameters } from '../../../../hooks/useViewParameters';

const PublicationsPageContainer: FC = (): ReactElement => {
  const { messages, posts } = useTypedSelector(publicationsSelector);
  const { languageMode, themeMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();
  const addMessageCallback = useCallback((text: string) => dispatch(addMessage(text)), [dispatch]);
  const addPostCallback = useCallback((text: string) => dispatch(addPost(text)), [dispatch]);

  useViewParameters(languageMode, themeMode);

  return (
    <PublicationsPage
      messages={messages}
      posts={posts}
      addMessage={addMessageCallback}
      addPost={addPostCallback}
      languageMode={languageMode}
    />
  );
};

export default PublicationsPageContainer;
