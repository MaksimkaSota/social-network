import { Dispatch, FC, ReactElement, SetStateAction, useCallback } from 'react';
import { ProfileInfo } from './ProfileInfo';
import { useMounted } from '../../../../../hooks/useMounted';
import { updateData, updateStatus, updatePhoto } from '../../../../../redux/thunks/profile';
import { statusSelector } from '../../../../../redux/selectors/profile';
import {
  isFetchingStatusSelector,
  isFetchingPhotoSelector,
  isFetchingDataSelector,
} from '../../../../../redux/selectors/loading';
import { statusErrorSelector, photoErrorSelector, dataErrorSelector } from '../../../../../redux/selectors/error';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../../hooks/useTypedDispatch';
import { Nullable } from '../../../../../utils/types/common';
import { IRequestProfile, IResponseProfile } from '../../../../../api/types/profile';
import { SetStatusType, SetSubmittingType } from '../../../../../utils/types/formik';

type PropsType = {
  profile: Nullable<IResponseProfile>;
  isOwner: boolean;
};

export const ProfileInfoContainer: FC<PropsType> = ({ profile, isOwner }): ReactElement | boolean => {
  const status = useTypedSelector(statusSelector);
  const isFetchingStatus = useTypedSelector(isFetchingStatusSelector);
  const statusError = useTypedSelector(statusErrorSelector);
  const isFetchingPhoto = useTypedSelector(isFetchingPhotoSelector);
  const photoError = useTypedSelector(photoErrorSelector);
  const isFetchingData = useTypedSelector(isFetchingDataSelector);
  const dataError = useTypedSelector(dataErrorSelector);

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

  const mounted: boolean = useMounted();

  return (
    mounted && (
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatusCallback}
        isFetchingStatus={isFetchingStatus}
        statusError={statusError}
        updatePhoto={updatePhotoCallback}
        isFetchingPhoto={isFetchingPhoto}
        photoError={photoError}
        updateData={updateDataCallback}
        isFetchingData={isFetchingData}
        dataError={dataError}
      />
    )
  );
};
