import classes from './Dialogs.module.scss';
import { Dialog } from '../Dialog/Dialog';

export const Dialogs = ({dialogs}) => {
  const dialogsElements = dialogs
    .map((dialog, index) => <Dialog name={dialog.name} id={dialog.id} key={index} />);

  return (
    <div className={classes.dialogsBlock}>
      <h3 className={classes.title}>Dialogs</h3>
      <div className={classes.dialogs}>
        {dialogsElements}
      </div>
    </div>
  );
};
