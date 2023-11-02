import { addMessage } from '../../../../../redux/actions/messages';
import { Messages } from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

export const MessagesContainer = () => {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const addMessageCallback = useCallback(
    (text) => dispatch(addMessage(text)),
    [dispatch]
  );

  return (
    <Messages messages={messages} addMessage={addMessageCallback} />
  );
};
