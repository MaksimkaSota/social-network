import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import classes from './ProfileStatus.module.scss';
import { ProfileStatusText } from '../ProfileStatusText/ProfileStatusText';
import { Button } from '../../../../Common/Button/Button';
import { Nullable } from '../../../../../utils/types/common';
import { ErrorType } from '../../../../../redux/types/error';

type PropsType = {
  isOwner: boolean;
  status: string;
  updateStatus: (newStatus: string) => void;
  isFetchingStatus: boolean;
  statusError: Nullable<ErrorType>;
};

export const ProfileStatus = React.memo<PropsType>(
  ({ isOwner, status, updateStatus, isFetchingStatus, statusError }): ReactElement => {
    const [editModeStatus, setEditModeStatus] = useState<boolean>(false);
    const [localStatus, setLocalStatus] = useState<string>(status);

    useEffect(() => {
      setLocalStatus(status);
    }, [status]);

    const onActivateEditModeStatus = (): void => {
      setEditModeStatus(true);
    };

    const onDeactivateEditModeStatus = (): void => {
      setEditModeStatus(false);
      updateStatus(localStatus);
    };

    const onChangeLocalStatus = (event: ChangeEvent<HTMLTextAreaElement> ): void => {
      setLocalStatus(event.target.value);
    };

    return (
      <div className={classes.profileStatus}>
        <div className={classes.statusBlock}>
          <h5 className={classes.title}>Status:</h5>
          {editModeStatus ? (
            <textarea className={classes.inputStatus} onChange={onChangeLocalStatus} value={localStatus} />
          ) : (
            <ProfileStatusText
              status={status}
              localStatus={localStatus}
              isFetchingStatus={isFetchingStatus}
              statusError={statusError}
            />
          )}
        </div>
        {isOwner && (
          <div className={classes.updateButtonBlock}>
            {editModeStatus ? (
              <Button text="Save" onClick={onDeactivateEditModeStatus} className={classes.statusButton} />
            ) : (
              <Button text="Edit status" onClick={onActivateEditModeStatus} className={classes.statusButton} />
            )}
          </div>
        )}
      </div>
    );
  }
);
