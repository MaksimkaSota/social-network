import classes from './Messages.module.scss';
import { Message } from '../Message/Message';
import { MessageFormContainer } from '../MessageForm/MessageFormContainer';

export const Messages = ({ messages, addMessage }) => {
  const messagesElements = messages.map((message) => <Message messageText={message.messageText} key={message.id} />);

  return (
    <div className={classes.messagesBlock}>
      <h3 className={classes.title}>Messages</h3>
      <MessageFormContainer addMessage={addMessage} />
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
