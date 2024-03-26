import type { FC, ReactElement } from 'react';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import type { IChatMessage } from '../../../../../utils/types/api';
import classes from './ChatMessages.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import type { ChannelStatus } from '../../../../../utils/types/common';

type PropsType = {
  messages: Array<IChatMessage>;
  channelStatus: ChannelStatus;
};

export const ChatMessages: FC<PropsType> = ({ messages, channelStatus }): ReactElement => {
  return (
    <div className={classes.chatMessagesBlock}>
      {channelStatus === 'pending' ? (
        <Preloader className={classes.chatPreloader} />
      ) : (
        messages.map((message: IChatMessage, index: number) => <ChatMessage message={message} key={index} />)
      )}
    </div>
  );
};
