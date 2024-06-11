import type { FC, ReactElement } from 'react';
import classes from './PublicationsPage.module.scss';
import type { PublicationType } from '../../../../utils/types/common';
import { Publications } from './Publications/Publications';

type PropsType = {
  messages: PublicationType[];
  posts: PublicationType[];
  addMessage: (text: string) => void;
  addPost: (text: string) => void;
};

export const PublicationsPage: FC<PropsType> = ({ messages, posts, addMessage, addPost }): ReactElement => {
  return (
    <div className={classes.publicationsPageBlock}>
      <Publications title="Messages" buttonText="Add message" publications={messages} addPublication={addMessage} />
      <Publications title="Posts" buttonText="Add post" publications={posts} addPublication={addPost} />
    </div>
  );
};
