import type { FC, ReactElement } from 'react';
import classes from './PublicationsPage.module.scss';
import { Publications } from './Publications/Publications';
import type { PublicationType } from '../../../../utils/types/common';
import { contentText } from '../../../../utils/languageLocalization/contentText';

type PropsType = {
  messages: PublicationType[];
  posts: PublicationType[];
  addMessage: (text: string) => void;
  addPost: (text: string) => void;
  languageMode: string;
};

export const PublicationsPage: FC<PropsType> = ({
  messages,
  posts,
  addMessage,
  addPost,
  languageMode,
}): ReactElement => {
  return (
    <div className={classes.publicationsPageBlock}>
      <Publications
        title={contentText.messagesTitle[languageMode]}
        buttonText={contentText.messageBtn[languageMode]}
        publications={messages}
        addPublication={addMessage}
        languageMode={languageMode}
      />
      <Publications
        title={contentText.postsTitle[languageMode]}
        buttonText={contentText.postBtn[languageMode]}
        publications={posts}
        addPublication={addPost}
        languageMode={languageMode}
      />
    </div>
  );
};
