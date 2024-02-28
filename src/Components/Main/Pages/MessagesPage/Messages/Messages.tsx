import classes from './Messages.module.scss';
import { Message } from '../Message/Message';
import { MessageFormContainer } from '../MessageForm/MessageFormContainer';
import { MessageType } from '../../../../../redux/types/messages';
import { FC, ReactElement } from 'react';

type PropsType = {
  messages: Array<MessageType>;
  addMessage: (text: string) => void;
};

export const Messages: FC<PropsType> = ({ messages, addMessage }): ReactElement => {
  const messagesElements = messages.map((message: MessageType): ReactElement => (
    <Message messageText={message.messageText} key={message.id} />
  ));

  return (
    <div className={classes.messagesBlock}>
      <h3 className={classes.title}>Messages</h3>
      <MessageFormContainer addMessage={addMessage} />
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
