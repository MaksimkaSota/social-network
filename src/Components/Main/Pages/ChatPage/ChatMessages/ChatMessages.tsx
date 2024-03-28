import type { FC, ReactElement, UIEvent } from 'react';
import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
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
      if (!isAutoScroll) {
        setIsAutoScroll(true);
      }
    } else if (isAutoScroll) {
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

  const isScroll: boolean =
    messagesAnchorRef.current && channelStatus === 'received'
      ? messagesAnchorRef.current?.scrollHeight > messagesAnchorRef.current?.clientHeight
      : false;

  return (
    <div
      className={cn(classes.chatMessagesBlock, { [classes.chatMessagesBlockScroll]: isScroll })}
      ref={messagesAnchorRef}
      onScroll={scrollHandler}
    >
      {channelStatus !== 'received' && <Preloader className={classes.chatPreloader} />}
      {channelStatus === 'received' &&
        (!messages.length ? (
          <p className={classes.emptyMessagesText}>Nobody wrote a message. Be the first!</p>
        ) : (
          messages.map((message: IChatMessage, index: number) => <ChatMessage message={message} key={index} />)
        ))}
    </div>
  );
};
