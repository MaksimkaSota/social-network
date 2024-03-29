import type { FC, ReactElement, UIEvent } from 'react';
import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import type { IChatMessage } from '../../../../../utils/types/api';
import classes from './ChatMessages.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import type { ChannelStatus } from '../../../../../utils/types/common';
import { scrollToBottom } from '../../../../../utils/helpers/componentHelpers';

type PropsType = {
  messages: Array<IChatMessage>;
  channelStatus: ChannelStatus;
};

export const ChatMessages: FC<PropsType> = ({ messages, channelStatus }): ReactElement => {
  const anchorRef = useRef<HTMLDivElement>(null);
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
    if (isAutoScroll) {
      scrollToBottom(anchorRef);
    }
  }, [messages]);

  const isScroll: boolean =
    anchorRef.current && channelStatus === 'received'
      ? anchorRef.current?.scrollHeight > anchorRef.current?.clientHeight
      : false;

  return (
    <div
      className={cn(classes.chatMessagesBlock, { [classes.chatMessagesBlockScroll]: isScroll })}
      ref={anchorRef}
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
