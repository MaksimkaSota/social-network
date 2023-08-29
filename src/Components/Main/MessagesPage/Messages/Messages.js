import classes from './Messages.module.scss';
import { Message } from '../Message/Message';
import { Button } from '../../../Common/Button/Button';

export const Messages = () => {
  return (
    <div className={classes.messagesBlock}>
      <h3 className={classes.title}>Messages</h3>
      <div className={classes.addMessageBlock}>
        <textarea className={classes.inputMessage}></textarea>
        <Button buttonText='Add message' />
      </div>
      <div className={classes.messages}>
        <Message message='Hi' />
        <Message message='Hey' />
        <Message message='Hello' />
      </div>
    </div>
  );
};
