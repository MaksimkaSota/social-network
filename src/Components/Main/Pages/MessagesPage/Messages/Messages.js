import classes from './Messages.module.scss';
import { Message } from '../Message/Message';
import { Button } from '../../../../Common/Button/Button';

export const Messages = ({messages, messageText, setMessage, addMessage}) => {
  const messagesElements = messages
    .map((message) => <Message messageText={message.messageText} key={message.id} />);

  const onSetMessage = (event) => {
    setMessage(event.target.value);
  };
  const onAddMessage = () => {
    addMessage();
  };

  return (
    <div className={classes.messagesBlock}>
      <h3 className={classes.title}>Messages</h3>
      <div className={classes.addMessageBlock}>
        <textarea onChange={onSetMessage} className={classes.inputMessage} value={messageText} />
        <Button callbackClick={onAddMessage} buttonText="Add message" />
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  );
};
