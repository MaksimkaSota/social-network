import classes from './MessagesPage.module.scss';
import { Dialogs } from './Dialogs/Dialogs';
import { Messages } from './Messages/Messages';

export const MessagesPage = ({dialogs, messages, addMessage}) => {
  return (
    <div className={classes.messagesPageBlock}>
      <Dialogs dialogs={dialogs} />
      <Messages messages={messages} addMessage={addMessage} />
    </div>
  );
};
