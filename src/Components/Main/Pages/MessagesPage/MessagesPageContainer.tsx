import type { FC, ReactElement } from 'react';
import { useCallback } from 'react';
import { MessagesPage } from './MessagesPage';
import { addMessage } from '../../../../redux/actions/messages';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { messagesSelector } from '../../../../redux/selectors/selectors';

const MessagesPageContainer: FC = (): ReactElement => {
  const { dialogs, messages } = useTypedSelector(messagesSelector);

  const dispatch = useTypedDispatch();
  const addMessageCallback = useCallback((text: string) => dispatch(addMessage(text)), [dispatch]);

  return <MessagesPage dialogs={dialogs} messages={messages} addMessage={addMessageCallback} />;
};

export default MessagesPageContainer;
