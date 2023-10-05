import classes from './ProfileInfo.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { useMounted } from '../../../../../hooks/useMounted';

export const ProfileInfo = ({profile, isFetching}) => {
  const mounted = useMounted();

  return (
      mounted ?
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
        </> :
        null
  );
};
