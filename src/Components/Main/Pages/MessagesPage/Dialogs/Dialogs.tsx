import { FC, ReactElement } from 'react';
import classes from './Dialogs.module.scss';
import { Dialog } from '../Dialog/Dialog';
import { DialogType } from '../../../../../redux/types/messages';

type PropsType = {
  dialogs: Array<DialogType>;
};

export const Dialogs: FC<PropsType> = ({ dialogs }): ReactElement => {
  const dialogsElements = dialogs.map(
    (dialog: DialogType): ReactElement => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />
  );

  return (
    <div className={classes.dialogsBlock}>
      <h3 className={classes.title}>Dialogs</h3>
      <div className={classes.dialogs}>{dialogsElements}</div>
    </div>
  );
};
