import { FC, ReactElement, useCallback } from 'react';
import { dialogsSelector, messagesSelector } from '../../../../redux/selectors/messages';
import { MessagesPage } from './MessagesPage';
import { addMessage } from '../../../../redux/actions/messages';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';

const MessagesPageContainer: FC = (): ReactElement => {
  const dialogs = useTypedSelector(dialogsSelector);
  const messages = useTypedSelector(messagesSelector);

  const dispatch = useTypedDispatch();
  const addMessageCallback = useCallback((text: string) => dispatch(addMessage(text)), [dispatch]);

  return <MessagesPage dialogs={dialogs} messages={messages} addMessage={addMessageCallback} />;
};

export default MessagesPageContainer;
