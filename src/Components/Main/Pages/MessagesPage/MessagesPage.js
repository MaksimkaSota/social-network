import classes from './MessagesPage.module.scss';
import { MessagesContainer } from './Messages/MessagesContainer';
import { DialogsContainer } from './Dialogs/DialogsContainer';

export const MessagesPage = () => {
  return (
    <div className={classes.messagesPageBlock}>
      <DialogsContainer />
      <MessagesContainer />
    </div>
  );
};
