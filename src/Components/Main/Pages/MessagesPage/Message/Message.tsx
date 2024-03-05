import type { FC, ReactElement } from 'react';
import classes from './Message.module.scss';

type PropsType = {
  messageText: string;
};

export const Message: FC<PropsType> = ({ messageText }): ReactElement => {
  return <p className={classes.message}>{messageText}</p>;
};
