import classes from './ProfileStatusText.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';

export const ProfileStatusText = ({isOwner, status, localStatus, setEditModeStatus, isFetchingStatus, errorStatus}) => {
  const onActivateEditModeStatus = () => {
    if (isOwner) {
      setEditModeStatus(true);
    }
  };

  if (isFetchingStatus && status !== localStatus) {
    return (
      <div className={classes.statusPreloaderWrapper}>
        <Preloader className={classes.statusPreloader} />
      </div>
    );
  }

  return (
    <div className={classes.statusTextBlock}>
      <p className={classes.statusText} onClick={onActivateEditModeStatus}>{status || 'no status'}</p>
      {
        errorStatus &&
        <p className={classes.statusTextError}>Error {errorStatus.code}, Failed to update status</p>
      }
    </div>
  );
};
