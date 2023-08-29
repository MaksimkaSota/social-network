import classes from './MessagesPage.module.scss';
import { Messages } from './Messages/Messages';
import { Dialogs } from './Dialogs/Dialogs';

export const MessagesPage = () => {
  return (
    <div className={classes.messagesPageBlock}>
      <Dialogs />
      <Messages />
    </div>
  );
};
