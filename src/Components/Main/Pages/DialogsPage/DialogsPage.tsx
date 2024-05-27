import type { FC, ReactElement } from 'react';
import classes from './DialogsPage.module.scss';
import { Messages } from './Messages/Messages';
import type { MessageType, PostType } from '../../../../utils/types/common';
import { Posts } from './Posts/Posts';

type PropsType = {
  messages: Array<MessageType>;
  addMessage: (text: string) => void;
  posts: Array<PostType>;
  addPost: (text: string) => void;
};

export const DialogsPage: FC<PropsType> = ({ messages, addMessage, posts, addPost }): ReactElement => {
  return (
    <div className={classes.messagesPageBlock}>
      <Messages messages={messages} addMessage={addMessage} />
      <Posts posts={posts} addPost={addPost} />;
    </div>
  );
};
