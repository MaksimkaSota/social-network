import { useDispatch, useSelector } from 'react-redux';
import { dialogsSelector, messagesSelector } from '../../../../redux/selectors/messages';
import { MessagesPage } from './MessagesPage';
import { useCallback } from 'react';
import { addMessage } from '../../../../redux/actions/messages';

const MessagesPageContainer = () => {
  const dialogs = useSelector(dialogsSelector);
  const messages = useSelector(messagesSelector);

  const dispatch = useDispatch();
  const addMessageCallback = useCallback(
    (text) => dispatch(addMessage(text)),
    [dispatch]
  );

  return (
    <MessagesPage dialogs={dialogs} messages={messages} addMessage={addMessageCallback} />
  );
};

export default MessagesPageContainer;
