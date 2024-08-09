import type { FC, ReactElement, UIEvent } from 'react';
import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import type { IChatMessage } from '../../../../../utils/types/api';
import classes from './ChatMessages.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import type { ChannelStatus } from '../../../../../utils/types/common';
import { scrollToBottom } from '../../../../../utils/helpers/componentsHelpers';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  messages: IChatMessage[];
  channelStatus: ChannelStatus;
  languageMode: string;
};

export const ChatMessages: FC<PropsType> = ({ messages, channelStatus, languageMode }): ReactElement => {
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
      setTimeout(() => scrollToBottom(anchorRef), 0);
    }
    // eslint-disable-next-line
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
      {channelStatus !== 'received' && (
        <div className={classes.chatPreloaderBlock}>
          <Preloader className={classes.chatPreloader} />
        </div>
      )}
      {channelStatus === 'received' &&
        (!messages.length ? (
          <p className={classes.emptyMessagesText}>{contentText.emptyChatText[languageMode]}</p>
        ) : (
          messages.map((message: IChatMessage, index: number) => (
            <ChatMessage message={message} key={index} languageMode={languageMode} />
          ))
        ))}
    </div>
  );
};
