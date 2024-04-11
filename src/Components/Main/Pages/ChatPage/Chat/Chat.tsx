import type { FC, ReactElement } from 'react';
import { ChatMessages } from '../ChatMessages/ChatMessages';
import { ChatFormContainer } from '../ChatForm/ChatFormContainer';
import type { IChatMessage } from '../../../../../utils/types/api';
import classes from './Chat.module.scss';
import type { ChannelStatus } from '../../../../../utils/types/common';

type PropsType = {
  messages: Array<IChatMessage>;
  sendMessage: (message: string) => void;
  channelStatus: ChannelStatus;
};

export const Chat: FC<PropsType> = ({ messages, sendMessage, channelStatus }): ReactElement => {
  return (
    <div className={classes.chatBlock}>
      <h3 className={classes.title}>Chat</h3>
      <ChatMessages messages={messages} channelStatus={channelStatus} />
      <ChatFormContainer sendMessage={sendMessage} channelStatus={channelStatus} />
    </div>
  );
};
