import type { FC, ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { Chat } from './Chat';
import type { IChatMessage } from '../../../../../utils/types/api';
import { RequestString } from '../../../../../utils/types/enums';

const wsChannel = new WebSocket(RequestString.samurai_js_web_socket);
export const ChatContainer: FC = (): ReactElement => {
  const [messages, setMessages] = useState<Array<IChatMessage>>([]);

  useEffect(() => {
    wsChannel.onmessage = (event: MessageEvent) => {
      const newMessages = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    };
  }, []);

  return <Chat wsChannel={wsChannel} messages={messages} />;
};
