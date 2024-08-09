import type { FC, ReactElement } from 'react';
import { ChatMessages } from '../ChatMessages/ChatMessages';
import { ChatFormContainer } from '../ChatForm/ChatFormContainer';
import type { IChatMessage } from '../../../../../utils/types/api';
import classes from './Chat.module.scss';
import type { ChannelStatus } from '../../../../../utils/types/common';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  messages: IChatMessage[];
  sendMessage: (message: string) => void;
  channelStatus: ChannelStatus;
  languageMode: string;
};

export const Chat: FC<PropsType> = ({ messages, sendMessage, channelStatus, languageMode }): ReactElement => {
  return (
    <div className={classes.chatBlock}>
      <h3 className={classes.title}>{contentText.chatTitle[languageMode]}</h3>
      <ChatMessages messages={messages} channelStatus={channelStatus} languageMode={languageMode} />
      <ChatFormContainer sendMessage={sendMessage} channelStatus={channelStatus} languageMode={languageMode} />
    </div>
  );
};
