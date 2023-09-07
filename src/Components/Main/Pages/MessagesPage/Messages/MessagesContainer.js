import { addMessage, setMessage } from '../../../../../redux/actions/messages';
import { Messages } from './Messages';
import { useContext } from 'react';
import { StoreContext } from '../../../../Common/Context/StoreContext';

export const MessagesContainer = () => {
  const store = useContext(StoreContext);
  const dispatch = store.dispatch;
  const state = store.getState();

  const onSetMessage = (event) => {
    dispatch(setMessage(event.target.value));
  };
  const onAddMessage = () => {
    dispatch(addMessage());
  };

  return (
    <Messages messages={state.messages.messages}
              messageText={state.messages.messageText}
              onSetMessage={onSetMessage}
              onAddMessage={onAddMessage}
    />
  );
};
