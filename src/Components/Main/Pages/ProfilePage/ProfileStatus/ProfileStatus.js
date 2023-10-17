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
      {
        !editMode ?
          <div className={classes.status}>
            <b className={classes.title}>Status:</b>
            {
              isFetchingStatus ?
                <Preloader className={classes.statusPreloader} /> :
                <p className={classes.statusText} onDoubleClick={onActivateEditMode}>{status || 'no status'}</p>
            }
          </div> :
          <div className={classes.status}>
            <b className={classes.title}>Status:</b>
            <textarea className={classes.inputStatus}
                      onChange={onChangeLocalStatus}
                      onBlur={onDeactivateEditMode}
                      autoFocus={true}
                      value={localStatus} />
          </div>
      }
    </div>
  );
};
