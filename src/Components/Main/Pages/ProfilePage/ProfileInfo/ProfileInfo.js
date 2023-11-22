import classes from './ProfileInfo.module.scss';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { ProfileData } from '../ProfileData/ProfileData';

export const ProfileInfo = ({
                              profile,
                              isOwner,
                              isFetchingProfile,
                              status,
                              updateStatus,
                              isFetchingStatus,
                              updatePhoto,
                              isFetchingPhoto
                            }) => {
  return (
    isFetchingProfile ?
      <Preloader /> :
      <div className={classes.infoBlock}>
        <h3 className={classes.title}>Profile info</h3>
        <ProfileStatus status={status}
                       updateStatus={updateStatus}
                       isFetchingStatus={isFetchingStatus} />
        <ProfilePhoto isOwner={isOwner}
                      photo={profile.photos.large}
                      updatePhoto={updatePhoto}
                      isFetchingPhoto={isFetchingPhoto} />
        <ProfileData isOwner={isOwner}
                     fullName={profile.fullName}
                     lookingForAJob={profile.lookingForAJob}
                     lookingForAJobDescription={profile.lookingForAJobDescription}
                     aboutMe={profile.aboutMe}
                     contacts={profile.contacts} />
      </div>
  );
};
