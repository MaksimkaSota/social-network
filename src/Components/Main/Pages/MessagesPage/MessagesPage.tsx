import type { FC, ReactElement } from 'react';
import classes from './MessagesPage.module.scss';
import { Dialogs } from './Dialogs/Dialogs';
import { Messages } from './Messages/Messages';
import type { DialogType, MessageType } from '../../../../utils/types/common';

type PropsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  addMessage: (text: string) => void;
};

export const MessagesPage: FC<PropsType> = ({ dialogs, messages, addMessage }): ReactElement => {
  return (
    <div className={classes.messagesPageBlock}>
      <Dialogs dialogs={dialogs} />
      <Messages messages={messages} addMessage={addMessage} />
    </div>
  );
};
