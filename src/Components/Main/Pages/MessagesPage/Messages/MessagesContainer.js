import { Messages } from './Messages';
import { useSelector } from 'react-redux';
import { useActions } from '../../../../../utils/hooks/useActions';

export const MessagesContainer = () => {
  const messages = useSelector((state) => state.messages.messages);
  const messageText = useSelector((state) => state.messages.messageText);
  const {setMessage, addMessage} = useActions();

  return (
    <Messages messages={messages} messageText={messageText} setMessage={setMessage} addMessage={addMessage} />
  );
};
