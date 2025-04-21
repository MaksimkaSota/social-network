import { type FC, type ReactElement, useCallback } from 'react';
import { PublicationsPage } from './PublicationsPage';
import { useViewParameters } from '../../../../hooks/useViewParameters';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { publicationsSelector, viewSelector } from '../../../../redux/selectors/selectors';
import { addMessage, addPost } from '../../../../redux/actions/publications';

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
