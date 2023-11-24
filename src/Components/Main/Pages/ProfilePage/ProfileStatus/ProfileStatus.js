import classes from './ProfileStatus.module.scss';
import { useEffect, useState } from 'react';
import { Preloader } from '../../../../Common/Preloader/Preloader';

export const ProfileStatus = ({status, updateStatus, isFetchingStatus}) => {
  const [editModeStatus, setEditModeStatus] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const onActivateEditModeStatus = () => {
    setEditModeStatus(true);
  };

  const onDeactivateEditModeStatus = () => {
    setEditModeStatus(false);
    updateStatus(localStatus);
  };

  const onChangeLocalStatus = (event) => {
    setLocalStatus(event.target.value);
  }

  return (
    <div className={classes.statusBlock}>
      <b className={classes.title}>Status:</b>
      {
        editModeStatus ?
          <textarea className={classes.inputStatus}
                    onChange={onChangeLocalStatus}
                    onBlur={onDeactivateEditModeStatus}
                    autoFocus={true}
                    value={localStatus}
          /> :
          isFetchingStatus && status !== localStatus ?
            <Preloader className={classes.statusPreloader} /> :
            <p className={classes.statusText} onDoubleClick={onActivateEditModeStatus}>{status || 'no status'}</p>
      }
    </div>
  );
};
