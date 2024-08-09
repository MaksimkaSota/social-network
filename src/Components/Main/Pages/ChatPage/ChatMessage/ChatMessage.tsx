import type { ReactElement } from 'react';
import { memo } from 'react';
import type { IChatMessage } from '../../../../../utils/types/api';
import userPhoto from '../../../../../assets/images/user.png';
import classes from './ChatMessage.module.scss';
import { altText } from '../../../../../utils/languageLocalization/altText';

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
      <img className={classes.userPhoto} src={message.photo || userPhoto} alt={altText.ava[languageMode]} />
      <p className={classes.userMessage}>
        {text} <span className={classes.userMessageTime}>({time})</span>
      </p>
    </div>
  );
});
