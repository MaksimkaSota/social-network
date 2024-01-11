import classes from './ProfileStatusText.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';

export const ProfileStatusText = ({status, localStatus, isFetchingStatus, statusError}) => {
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
      {
        statusError &&
        <p className={classes.statusTextError}>Error {statusError.code}, Failed to update status</p>
      }
    </div>
  );
};
