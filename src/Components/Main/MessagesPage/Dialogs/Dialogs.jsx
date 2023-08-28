import classes from './Dialogs.module.scss';
import { Dialog } from '../Dialog/Dialog';

export const Dialogs = () => {
  return (
    <div className={classes.dialogsBlock}>
      <h3 className={classes.title}>Dialogs</h3>
      <div className={classes.dialogs}>
        <Dialog name='Max' id='1' />
        <Dialog name='Eugene' id='2' />
        <Dialog name='Yuri' id='3' />
        <Dialog name='Alexei' id='4' />
        <Dialog name='Andrey' id='5' />
      </div>
    </div>
  );
};
