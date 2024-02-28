import classes from './ProfileStatusText.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { Nullable } from '../../../../../utils/types/common';
import { ErrorType } from '../../../../../redux/types/error';
import { FC, ReactElement } from 'react';

type PropsType = {
  status: string;
  localStatus: string;
  isFetchingStatus: boolean;
  statusError: Nullable<ErrorType>;
};

export const ProfileStatusText: FC<PropsType> = ({
  status,
  localStatus,
  isFetchingStatus,
  statusError,
}): ReactElement => {
  if (isFetchingStatus && status !== localStatus) {
    return (
      <div className={classes.statusPreloaderWrapper}>
        <Preloader className={classes.statusPreloader} />
      </div>
    );
  }

  return (
    <div className={classes.statusTextBlock}>
      <p className={classes.statusText}>{status || 'no status'}</p>
      {statusError && <p className={classes.statusTextError}>Error {statusError.code}, Failed to update status</p>}
    </div>
  );
};