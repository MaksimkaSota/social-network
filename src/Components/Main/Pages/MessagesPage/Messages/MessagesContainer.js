import { addMessage, setMessage } from '../../../../../redux/actions/messages';
import { Messages } from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

export const MessagesContainer = () => {
  const messages = useSelector((state) => state.messages.messages);
  const messageText = useSelector((state) => state.messages.messageText);
  const dispatch = useDispatch();
  const setMessageCallback = useCallback(
    (text) => dispatch(setMessage(text)),
    [dispatch]
  );
  const addMessageCallback = useCallback(
    (text) => dispatch(addMessage(text)),
    [dispatch]
  );

  return (
    <Messages messages={messages}
              messageText={messageText}
              setMessage={setMessageCallback}
              addMessage={addMessageCallback}
    />
  );
};
