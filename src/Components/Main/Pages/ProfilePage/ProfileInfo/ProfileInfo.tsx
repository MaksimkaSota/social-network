import classes from './ProfileInfo.module.scss';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { ProfileData } from '../ProfileData/ProfileData';
import { Nullable } from '../../../../../utils/types/common';
import { IRequestProfile, IResponseProfile } from '../../../../../api/types/profile';
import { Dispatch, FC, SetStateAction } from 'react';
import { ErrorType } from '../../../../../redux/types/error';

type PropsType = {
  isOwner: boolean;
  profile: Nullable<IResponseProfile>;
  status: string;
  updateStatus: (newStatus: string) => void;
  isFetchingStatus: boolean;
  statusError: Nullable<ErrorType>;
  updatePhoto: (photo: File) => void;
  isFetchingPhoto: boolean;
  photoError: Nullable<ErrorType>;
  updateData: (
    profileData: IRequestProfile,
    setStatus: (status?: any) => void,
    setSubmitting: (isSubmitting: boolean) => void,
    setEditModeData: Dispatch<SetStateAction<boolean>>
  ) => void;
  isFetchingData: boolean;
  dataError: Nullable<ErrorType>;
};

export const ProfileInfo: FC<PropsType> = ({
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
  const data: IRequestProfile = {
    fullName: profile!.fullName,
    lookingForAJob: profile!.lookingForAJob,
    lookingForAJobDescription: profile!.lookingForAJobDescription,
    aboutMe: profile!.aboutMe,
    contacts: {
      facebook: profile!.contacts.facebook,
      website: profile!.contacts.website,
      vk: profile!.contacts.vk,
      twitter: profile!.contacts.twitter,
      instagram: profile!.contacts.instagram,
      youtube: profile!.contacts.youtube,
      github: profile!.contacts.github,
      mainLink: profile!.contacts.mainLink,
    },
  };
  const photo: Nullable<string> = profile!.photos.large;

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
