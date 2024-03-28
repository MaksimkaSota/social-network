import type { FC, ReactElement, UIEvent } from 'react';
import { useEffect, useState, useRef } from 'react';
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
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true);

  const scrollHandler = (event: UIEvent<HTMLDivElement>): void => {
    const element = event.currentTarget;

    if (element.scrollHeight - element.scrollTop - element.clientHeight < 100) {
      setIsAutoScroll(true);
    } else {
      setIsAutoScroll(false);
    }
  };

  useEffect(() => {
    setIsAutoScroll(true);
  }, []);

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollTo({
        top: messagesAnchorRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [isAutoScroll, messages]);

  return (
    <div className={classes.chatMessagesBlock} ref={messagesAnchorRef} onScroll={scrollHandler}>
      {channelStatus === 'pending' ? (
        <Preloader className={classes.chatPreloader} />
      ) : (
        messages.map((message: IChatMessage, index: number) => <ChatMessage message={message} key={index} />)
      )}
    </div>
  );
};
