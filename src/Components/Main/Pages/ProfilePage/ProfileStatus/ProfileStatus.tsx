import { useEffect, useState, memo } from 'react';
import type { ChangeEvent, ReactElement } from 'react';
import classes from './ProfileStatus.module.scss';
import { ProfileStatusText } from '../ProfileStatusText/ProfileStatusText';
import { Button } from '../../../../Common/Button/Button';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  isOwner: boolean;
  status: string;
  incorrectStatusText: string;
  updateStatus: (newStatus: string) => void;
  isFetchingStatus: boolean;
  statusError: Nullable<ErrorType>;
  languageMode: string;
};

export const ProfileStatus = memo<PropsType>(
  ({
    isOwner,
    status,
    incorrectStatusText,
    updateStatus,
    isFetchingStatus,
    statusError,
    languageMode,
  }): ReactElement => {
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

    const onChangeLocalStatus = (event: ChangeEvent<HTMLTextAreaElement>): void => {
      setLocalStatus(event.target.value);
    };

    return (
      <div className={classes.profileStatus}>
        <div className={classes.statusBlock}>
          <h5 className={classes.title}>{contentText.status[languageMode]}:</h5>
          {editModeStatus ? (
            <textarea className={classes.inputStatus} onChange={onChangeLocalStatus} value={localStatus} />
          ) : (
            <ProfileStatusText
              status={status}
              localStatus={localStatus}
              incorrectStatusText={incorrectStatusText}
              isFetchingStatus={isFetchingStatus}
              statusError={statusError}
              languageMode={languageMode}
            />
          )}
        </div>
        {isOwner && editModeStatus && (
          <Button
            text={contentText.saveStatusBtn[languageMode]}
            onClick={onDeactivateEditModeStatus}
            className={classes.statusButton}
          />
        )}
        {isOwner && !editModeStatus && (
          <Button
            text={contentText.editStatusBtn[languageMode]}
            onClick={onActivateEditModeStatus}
            className={classes.statusButton}
          />
        )}
      </div>
    );
  }
);
