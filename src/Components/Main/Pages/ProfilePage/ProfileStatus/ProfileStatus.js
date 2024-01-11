import classes from './ProfileStatus.module.scss';
import { useEffect, useState } from 'react';
import { ProfileStatusText } from '../ProfileStatusText/ProfileStatusText';
import { Button } from '../../../../Common/Button/Button';

export const ProfileStatus = ({isOwner, status, updateStatus, isFetchingStatus, statusError}) => {
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
  };

  return (
    <div className={classes.profileStatus}>
      <div className={classes.statusBlock}>
        <h5 className={classes.title}>Status:</h5>
        {
          editModeStatus ?
            <textarea
              className={classes.inputStatus}
              onChange={onChangeLocalStatus}
              autoFocus={true}
              value={localStatus}
            /> :
            <ProfileStatusText
              isOwner={isOwner}
              status={status}
              localStatus={localStatus}
              setEditModeStatus={setEditModeStatus}
              isFetchingStatus={isFetchingStatus}
              statusError={statusError}
            />
        }
      </div>
      {
        isOwner &&
        <div className={classes.updateButtonBlock}>
          {
            editModeStatus ?
              <Button text="Save" onClick={onDeactivateEditModeStatus} className={classes.button} /> :
              <Button text="Edit status" onClick={onActivateEditModeStatus} className={classes.button} />
          }
        </div>
      }
    </div>
  );
};
