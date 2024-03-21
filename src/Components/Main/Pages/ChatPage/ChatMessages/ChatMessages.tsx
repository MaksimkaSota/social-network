import type { FC } from 'react';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import type { IChatMessage } from '../../../../../utils/types/api';
import classes from './ChatMessages.module.scss';

type PropsType = {
  messages: Array<IChatMessage>;
};

export const ChatMessages: FC<PropsType> = ({ messages }) => {
  return (
    <div className={classes.chatMessagesBlock}>
      {messages.map((message: IChatMessage, index: number) => (
        <ChatMessage message={message} key={index} />
      ))}
    </div>
  );
};
