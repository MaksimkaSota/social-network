import classes from './ProfileStatus.module.scss';
import { useEffect, useState } from 'react';
import { Preloader } from '../../../../Common/Preloader/Preloader';

export const ProfileStatus = ({status, updateStatus, isFetchingStatus}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const onActivateEditMode = () => {
    setEditMode(true);
  };

  const onDeactivateEditMode = () => {
    setEditMode(false);
    updateStatus(localStatus);
  };

  const onChangeLocalStatus = (event) => {
    setLocalStatus(event.target.value);
  }

  return (
    <div className={classes.statusBlock}>
      <b className={classes.title}>Status:</b>
      {
        editMode ?
          <textarea className={classes.inputStatus}
                    onChange={onChangeLocalStatus}
                    onBlur={onDeactivateEditMode}
                    autoFocus={true}
                    value={localStatus}
          /> :
          isFetchingStatus && status !== localStatus ?
            <Preloader className={classes.statusPreloader} /> :
            <p className={classes.statusText} onDoubleClick={onActivateEditMode}>{status || 'no status'}</p>
      }
    </div>
  );
};
