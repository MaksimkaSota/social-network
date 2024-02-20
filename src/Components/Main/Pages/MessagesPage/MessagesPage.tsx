import classes from './MessagesPage.module.scss';
import { Dialogs } from './Dialogs/Dialogs';
import { Messages } from './Messages/Messages';
import { FC, ReactElement } from 'react';
import { DialogType, MessageType } from '../../../../redux/types/messages';

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
