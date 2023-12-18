import classes from './ProfileStatus.module.scss';
import { useEffect, useState } from 'react';
import { ProfileStatusText } from '../ProfileStatusText/ProfileStatusText';

export const ProfileStatus = ({isOwner, status, updateStatus, isFetchingStatus, errorStatus}) => {
  const [editModeStatus, setEditModeStatus] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

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
          <textarea
            className={classes.inputStatus}
            onChange={onChangeLocalStatus}
            onBlur={onDeactivateEditModeStatus}
            autoFocus={true}
            value={localStatus}
          /> :
          <ProfileStatusText
            isOwner={isOwner}
            status={status}
            localStatus={localStatus}
            setEditModeStatus={setEditModeStatus}
            isFetchingStatus={isFetchingStatus}
            errorStatus={errorStatus}
          />
      }
    </div>
  );
};
