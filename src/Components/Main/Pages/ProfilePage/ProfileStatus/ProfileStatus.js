import classes from './ProfileStatus.module.scss';
import { useEffect, useState } from 'react';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import cn from 'classnames';

export const ProfileStatus = ({isOwner, status, updateStatus, isFetchingStatus, errorStatus}) => {
  const [editModeStatus, setEditModeStatus] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const onActivateEditModeStatus = () => {
    if (isOwner) {
      setEditModeStatus(true);
    }
  };

  const onDeactivateEditModeStatus = () => {
    setEditModeStatus(false);
    updateStatus(localStatus);
  };

  const onChangeLocalStatus = (event) => {
    setLocalStatus(event.target.value);
  };

  return (
    <div className={classes.statusBlock}>
      <h5 className={classes.title}>Status:</h5>
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
            <div>
              <p className={classes.statusText} onClick={onActivateEditModeStatus}>{status || 'no status'}</p>
              {
                errorStatus &&
                <p className={classes.statusTextError}>Error {errorStatus.code}, Failed to update status</p>
              }
            </div>
      }
    </div>
  );
};
