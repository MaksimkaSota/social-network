import { addMessage } from '../../../../../redux/actions/messages';
import { Messages } from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { messagesSelector } from '../../../../../redux/selectors/messages';

export const MessagesContainer = () => {
  const messages = useSelector(messagesSelector);
  const dispatch = useDispatch();
  const addMessageCallback = useCallback(
    (text) => dispatch(addMessage(text)),
    [dispatch]
  );

  return (
    <Messages messages={messages} addMessage={addMessageCallback} />
  );
};
