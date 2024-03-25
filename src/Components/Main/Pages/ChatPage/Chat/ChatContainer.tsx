import type { FC, ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { Chat } from './Chat';
import { RequestString } from '../../../../../utils/types/enums';
import type { Nullable } from '../../../../../utils/types/common';

export const ChatContainer: FC = (): ReactElement => {
  const [wsChannel, setWsChannel] = useState<Nullable<WebSocket>>(null);
  const [isWsChannelOpen, setIsWsChannelOpen] = useState<boolean>(false);

  useEffect(() => {
    let ws: WebSocket;

    const createChannel = (): void => {
      if (ws) {
        ws.onclose = null;
        ws.close();
      }

      ws = new WebSocket(RequestString.samurai_js_web_socket);

      window.onoffline = () => {
        console.log('disconnect');
        setIsWsChannelOpen(false);
        createChannel();
      };

      ws.onclose = (): void => {
        console.log('close WebSocket');
        setIsWsChannelOpen(false);
        setTimeout(createChannel, 3000);
      };

      setWsChannel(ws);
    };
    createChannel();

    return () => {
      window.onoffline = null;
    };
  }, []);

  return <Chat wsChannel={wsChannel} isWsChannelOpen={isWsChannelOpen} setIsWsChannelOpen={setIsWsChannelOpen} />;
};
