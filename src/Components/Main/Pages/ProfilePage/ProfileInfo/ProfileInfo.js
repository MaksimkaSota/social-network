import classes from './ProfileInfo.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { Preloader } from '../../../../Common/Preloader/Preloader';

export const ProfileInfo = ({profile, isFetching}) => {
  return (
    <>
      {
        isFetching ?
          <Preloader /> :
          <div className={classes.infoBlock}>
            <h3 className={classes.title}>My profile info</h3>
            <img
              className={classes.userPhoto}
              src={profile.photos.large || userPhoto}
              alt="avatar"
            />
          </div>
      }
    </>
  );
};
