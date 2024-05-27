import type { FC, ReactElement } from 'react';
import { useCallback } from 'react';
import { DialogsPage } from './DialogsPage';
import { addMessage, addPost } from '../../../../redux/actions/dialogs';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { dialogsSelector } from '../../../../redux/selectors/selectors';

const DialogsPageContainer: FC = (): ReactElement => {
  const { messages, posts } = useTypedSelector(dialogsSelector);

  const dispatch = useTypedDispatch();
  const addMessageCallback = useCallback((text: string) => dispatch(addMessage(text)), [dispatch]);
  const addPostCallback = useCallback((text: string) => dispatch(addPost(text)), [dispatch]);

  return <DialogsPage messages={messages} addMessage={addMessageCallback} posts={posts} addPost={addPostCallback} />;
};

export default DialogsPageContainer;
