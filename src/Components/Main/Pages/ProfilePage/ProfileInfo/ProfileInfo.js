import classes from './ProfileInfo.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';

export const ProfileInfo = ({
                              profile,
                              isOwner,
                              isFetchingProfile,
                              status,
                              updateStatus,
                              isFetchingStatus
                            }) => {
  return (
    isFetchingProfile ?
      <Preloader /> :
      <div className={classes.infoBlock}>
        <h3 className={classes.title}>Profile info</h3>
        <p className={classes.fullName}>{profile.fullName}</p>
        <ProfilePhoto isOwner={isOwner}
                      photo={profile.photos.large} />
        <ProfileStatus status={status}
                       updateStatus={updateStatus}
                       isFetchingStatus={isFetchingStatus} />
      </div>
  );
};
