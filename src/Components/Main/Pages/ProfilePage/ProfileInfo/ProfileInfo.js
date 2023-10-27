import classes from './ProfileInfo.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';

export const ProfileInfo = ({profile, isFetchingProfile, status, updateStatus, isFetchingStatus}) => {
  return (
    isFetchingProfile ?
      <Preloader /> :
      <div className={classes.infoBlock}>
        <h3 className={classes.title}>My profile info</h3>
        <p className={classes.fullName}>{profile.fullName}</p>
        <img
          className={classes.userPhoto}
          src={profile.photos.large || userPhoto}
          alt="avatar"
        />
        <ProfileStatus status={status} updateStatus={updateStatus} isFetchingStatus={isFetchingStatus} />
      </div>
  );
};
