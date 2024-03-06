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
  statusError,
  updatePhoto,
  isFetchingPhoto,
  photoError,
  updateData,
  isFetchingData,
  dataError,
}) => {
  const data = {
    fullName: profile.fullName,
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription,
    aboutMe: profile.aboutMe,
    contacts: {
      facebook: profile.contacts.facebook,
      website: profile.contacts.website,
      vk: profile.contacts.vk,
      twitter: profile.contacts.twitter,
      instagram: profile.contacts.instagram,
      youtube: profile.contacts.youtube,
      github: profile.contacts.github,
      mainLink: profile.contacts.mainLink,
    },
  };
  const photo = profile.photos.large;

  return (
    <div className={classes.infoBlock}>
      <h3 className={classes.title}>Profile info</h3>
      <ProfileStatus
        isOwner={isOwner}
        status={status}
        updateStatus={updateStatus}
        isFetchingStatus={isFetchingStatus}
        statusError={statusError}
      />
      <ProfilePhoto
        isOwner={isOwner}
        photo={photo}
        updatePhoto={updatePhoto}
        isFetchingPhoto={isFetchingPhoto}
        photoError={photoError}
      />
      <ProfileData
        isOwner={isOwner}
        data={data}
        updateData={updateData}
        isFetchingData={isFetchingData}
        dataError={dataError}
      />
    </div>
  );
};
