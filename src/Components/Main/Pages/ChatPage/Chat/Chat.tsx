import type { FC, ReactElement } from 'react';
import { ChatMessages } from '../ChatMessages/ChatMessages';
import { ChatFormContainer } from '../ChatForm/ChatFormContainer';
import type { IChatMessage } from '../../../../../utils/types/api';
import classes from './Chat.module.scss';

type PropsType = {
  wsChannel: WebSocket;
  messages: Array<IChatMessage>;
};

export const Chat: FC<PropsType> = ({ wsChannel, messages }): ReactElement => {
  return (
    <div className={classes.chatBlock}>
      <h3 className={classes.title}>Chat</h3>
      <ChatMessages messages={messages} />
      <ChatFormContainer wsChannel={wsChannel} />
    </div>
  );
};
