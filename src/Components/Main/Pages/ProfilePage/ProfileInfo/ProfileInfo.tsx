import type { Dispatch, FC, SetStateAction } from 'react';
import classes from './ProfileInfo.module.scss';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { ProfileData } from '../ProfileData/ProfileData';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import type { SetStatusType, SetSubmittingType } from '../../../../../utils/types/form';
import type { IRequestProfile, IResponseProfile } from '../../../../../utils/types/api';
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  isOwner: boolean;
  profile: Nullable<IResponseProfile>;
  status: string;
  incorrectStatusText: string;
  incorrectPhotoText: string;
  updateStatus: (newStatus: string) => void;
  isFetchingStatus: boolean;
  statusError: Nullable<ErrorType>;
  updatePhoto: (photo: File) => void;
  isFetchingPhoto: boolean;
  photoError: Nullable<ErrorType>;
  updateData: (
    profileData: IRequestProfile,
    setStatus: SetStatusType,
    setSubmitting: SetSubmittingType,
    setEditModeData: Dispatch<SetStateAction<boolean>>
  ) => void;
  isFetchingData: boolean;
  dataError: Nullable<ErrorType>;
  languageMode: string;
};

export const ProfileInfo: FC<PropsType> = ({
  isOwner,
  profile,
  status,
  incorrectStatusText,
  incorrectPhotoText,
  updateStatus,
  isFetchingStatus,
  statusError,
  updatePhoto,
  isFetchingPhoto,
  photoError,
  updateData,
  isFetchingData,
  dataError,
  languageMode,
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
      <h3 className={classes.title}>{contentText.profileTitle[languageMode]}</h3>
      <div className={classes.innerInfoBlock}>
        <div className={classes.statusAndPhotoBlock}>
          <ProfilePhoto
            isOwner={isOwner}
            photo={photo}
            updatePhoto={updatePhoto}
            isFetchingPhoto={isFetchingPhoto}
            photoError={photoError}
            incorrectPhotoText={incorrectPhotoText}
            languageMode={languageMode}
          />
          <ProfileStatus
            isOwner={isOwner}
            status={status}
            incorrectStatusText={incorrectStatusText}
            updateStatus={updateStatus}
            isFetchingStatus={isFetchingStatus}
            statusError={statusError}
            languageMode={languageMode}
          />
        </div>
        <ProfileData
          isOwner={isOwner}
          data={data}
          updateData={updateData}
          isFetchingData={isFetchingData}
          dataError={dataError}
          languageMode={languageMode}
        />
      </div>
    </div>
  );
};
