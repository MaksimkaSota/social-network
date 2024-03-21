import type { FC, ReactElement } from 'react';
import type { IChatMessage } from '../../../../../utils/types/api';
import userPhoto from '../../../../../assets/images/user.png';
import classes from './ChatMessage.module.scss';

type PropsType = {
  message: IChatMessage;
};

export const ChatMessage: FC<PropsType> = ({ message }): ReactElement => {
  return (
    <div className={classes.chatMessageBlock}>
      <p className={classes.userName}>{message.userName}</p>
      <img className={classes.userPhoto} src={message.photo || userPhoto} alt="avatar" />
      <p className={classes.userMessage}>{message.message}</p>
    </div>
  );
};
