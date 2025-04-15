import { type Dispatch, type FC, type ReactElement, type SetStateAction, useCallback } from 'react';
import { ProfileInfo } from './ProfileInfo';
import { useTypedDispatch } from '../../../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { profileSelector, viewSelector } from '../../../../../redux/selectors/selectors';
import {
  isFetchingDataSelector,
  isFetchingPhotoSelector,
  isFetchingStatusSelector,
} from '../../../../../redux/selectors/loading';
import { dataErrorSelector, photoErrorSelector, statusErrorSelector } from '../../../../../redux/selectors/error';
import { updateData, updatePhoto, updateStatus } from '../../../../../redux/thunks/profile';
import type { SetStatusType, SetSubmittingType } from '../../../../../utils/types/form';
import type { IRequestProfile, IResponseProfile } from '../../../../../utils/types/api';
import type { Nullable } from '../../../../../utils/types/common';

type PropsType = {
  profile: Nullable<IResponseProfile>;
  isOwner: boolean;
};

export const ProfileInfoContainer: FC<PropsType> = ({ profile, isOwner }): ReactElement | null => {
  const { status, incorrectStatusText, incorrectPhotoText } = useTypedSelector(profileSelector);
  const isFetchingStatus = useTypedSelector(isFetchingStatusSelector);
  const statusError = useTypedSelector(statusErrorSelector);
  const isFetchingPhoto = useTypedSelector(isFetchingPhotoSelector);
  const photoError = useTypedSelector(photoErrorSelector);
  const isFetchingData = useTypedSelector(isFetchingDataSelector);
  const dataError = useTypedSelector(dataErrorSelector);
  const { languageMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();
  const updateStatusCallback = useCallback((newStatus: string) => dispatch(updateStatus(newStatus)), [dispatch]);
  const updatePhotoCallback = useCallback((photo: File) => dispatch(updatePhoto(photo)), [dispatch]);
  const updateDataCallback = useCallback(
    (
      profileData: IRequestProfile,
      setStatus: SetStatusType,
      setSubmitting: SetSubmittingType,
      setEditModeData: Dispatch<SetStateAction<boolean>>
    ) => {
      dispatch(updateData(profileData, setStatus, setSubmitting, setEditModeData));
    },
    [dispatch]
  );

  return (
    profile && (
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        incorrectStatusText={incorrectStatusText}
        incorrectPhotoText={incorrectPhotoText}
        updateStatus={updateStatusCallback}
        isFetchingStatus={isFetchingStatus}
        statusError={statusError}
        updatePhoto={updatePhotoCallback}
        isFetchingPhoto={isFetchingPhoto}
        photoError={photoError}
        updateData={updateDataCallback}
        isFetchingData={isFetchingData}
        dataError={dataError}
        languageMode={languageMode}
      />
    )
  );
};
