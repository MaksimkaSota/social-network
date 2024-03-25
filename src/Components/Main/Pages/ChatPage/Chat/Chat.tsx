import type { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { ChatMessages } from '../ChatMessages/ChatMessages';
import { ChatFormContainer } from '../ChatForm/ChatFormContainer';
import type { IChatMessage } from '../../../../../utils/types/api';
import classes from './Chat.module.scss';
import type { Nullable } from '../../../../../utils/types/common';

type PropsType = {
  wsChannel: Nullable<WebSocket>;
  isWsChannelOpen: boolean;
  setIsWsChannelOpen: Dispatch<SetStateAction<boolean>>;
};

export const Chat: FC<PropsType> = ({ wsChannel, isWsChannelOpen, setIsWsChannelOpen }): ReactElement => {
  const [messages, setMessages] = useState<Array<IChatMessage>>([]);

  useEffect(() => {
    if (!wsChannel) return;
    wsChannel.onmessage = (event: MessageEvent): void => {
      const newMessages = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    };
  }, [wsChannel]);

  return (
    <div className={classes.chatBlock}>
      <h3 className={classes.title}>Chat</h3>
      <ChatMessages messages={messages} />
      <ChatFormContainer
        wsChannel={wsChannel}
        isWsChannelOpen={isWsChannelOpen}
        setIsWsChannelOpen={setIsWsChannelOpen}
      />
    </div>
  );
};
