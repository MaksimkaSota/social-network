import classes from './ProfileInfo.module.scss';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { ProfileData } from '../ProfileData/ProfileData';

export const ProfileInfo = ({
                              isOwner,
                              profile,
                              status,
                              updateStatus,
                              isFetchingStatus,
                              updatePhoto,
                              isFetchingPhoto,
                              updateData
                            }) => {
  const data = {
    fullName: profile.fullName,
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription,
    aboutMe: profile.aboutMe,
    contacts: {
      facebook: profile.facebook,
      website: profile.website,
      vk: profile.vk,
      twitter: profile.twitter,
      instagram: profile.instagram,
      youtube: profile.youtube,
      github: profile.github,
      mainLink: profile.mainLink
    }
  };
  const photo = profile.photos.large;

  return (
    <div className={classes.infoBlock}>
      <h3 className={classes.title}>Profile info</h3>
      <ProfileStatus isOwner={isOwner}
                     status={status}
                     updateStatus={updateStatus}
                     isFetchingStatus={isFetchingStatus} />
      <ProfilePhoto isOwner={isOwner}
                    photo={photo}
                    updatePhoto={updatePhoto}
                    isFetchingPhoto={isFetchingPhoto} />
      <ProfileData isOwner={isOwner}
                   data={data}
                   updateData={updateData} />
    </div>
  );
};
