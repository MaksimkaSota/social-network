import type { FC, ReactElement } from 'react';
import classes from './ChatPage.module.scss';
import { ChatContainer } from './Chat/ChatContainer';

const ChatPage: FC = (): ReactElement => {
  return (
    <div className={classes.chatPageBlock}>
      <ChatContainer />
    </div>
  );
};

export default ChatPage;
