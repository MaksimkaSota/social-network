import classes from './Messages.module.scss';
import { Message } from '../Message/Message';

export const Messages = () => {
  return (
    <div className={classes.messagesBlock}>
      <h3 className={classes.title}>Messages</h3>
      <div className={classes.messages}>
        <Message message='Hi' />
        <Message message='Hey' />
        <Message message='Hello' />
      </div>
    </div>
  );
};
