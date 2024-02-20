import classes from './Message.module.scss';
import { FC, ReactElement } from 'react';

type PropsType = {
  messageText: string;
};

export const Message: FC<PropsType> = ({ messageText }): ReactElement => {
  return <p className={classes.message}>{messageText}</p>;
};
