import classes from './ProfileInfo.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { Preloader } from '../../../../Common/Preloader/Preloader';

export const ProfileInfo = ({profile, isFetchingProfile}) => {
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
      </div>
  );
};
