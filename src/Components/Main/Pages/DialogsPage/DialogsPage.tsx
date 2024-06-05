import type { FC, ReactElement } from 'react';
import classes from './DialogsPage.module.scss';
import { Messages } from './Messages/Messages';
import type { MessageType, PostType } from '../../../../utils/types/common';
import { Posts } from './Posts/Posts';

type PropsType = {
  messages: MessageType[];
  addMessage: (text: string) => void;
  posts: PostType[];
  addPost: (text: string) => void;
};

export const DialogsPage: FC<PropsType> = ({ messages, addMessage, posts, addPost }): ReactElement => {
  return (
    <div className={classes.dialogsPageBlock}>
      <Messages messages={messages} addMessage={addMessage} />
      <Posts posts={posts} addPost={addPost} />;
    </div>
  );
};
