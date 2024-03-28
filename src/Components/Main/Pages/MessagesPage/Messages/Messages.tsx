import type { FC, ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import classes from './Messages.module.scss';
import { Message } from '../Message/Message';
import { MessageFormContainer } from '../MessageForm/MessageFormContainer';
import type { MessageType } from '../../../../../utils/types/common';
import { scrollToBottom } from '../../../../../utils/helpers/componentHelpers';

type PropsType = {
  messages: Array<MessageType>;
  addMessage: (text: string) => void;
};

export const Messages: FC<PropsType> = ({ messages, addMessage }): ReactElement => {
  const messagesElements = messages.map(
    (message: MessageType): ReactElement => <Message messageText={message.messageText} key={message.id} />
  );

  const anchorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollToBottom(anchorRef);
  }, [messages]);

  return (
    <div className={classes.messagesBlock}>
      <h3 className={classes.title}>Messages</h3>
      <MessageFormContainer addMessage={addMessage} />
      <div className={classes.messages} ref={anchorRef}>
        {messagesElements}
      </div>
    </div>
  );
};
