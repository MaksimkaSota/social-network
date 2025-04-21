import { memo, type ReactElement } from 'react';
import classes from './ChatMessage.module.scss';
import { Avatar } from '../../../../Common/Avatar/Avatar';
import type { IChatMessage } from '../../../../../utils/types/api';

type PropsType = {
  message: IChatMessage;
  languageMode: string;
};

export const ChatMessage = memo<PropsType>(({ message, languageMode }): ReactElement => {
  let time = 'no time';
  let text = message.message;

  if (text.includes('UTC+0')) {
    time = text.split(' ').slice(-2).join(' ');
    text = text.split(' ').slice(0, -2).join(' ');
  }

  return (
    <div className={classes.chatMessageBlock}>
      <p className={classes.userName}>{message.userName}</p>
      <Avatar avatar={message.photo} className={classes.userPhoto} languageMode={languageMode} />
      <p className={classes.userMessage}>
        {text} <span className={classes.userMessageTime}>({time})</span>
      </p>
    </div>
  );
});
