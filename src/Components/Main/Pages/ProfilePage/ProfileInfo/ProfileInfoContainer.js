import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export const ProfileInfoContainer = ({ profile, isOwner }) => {
  const status = useSelector(statusSelector);
  const isFetchingStatus = useSelector(isFetchingStatusSelector);
  const statusError = useSelector(statusErrorSelector);
  const isFetchingPhoto = useSelector(isFetchingPhotoSelector);
  const photoError = useSelector(photoErrorSelector);
  const isFetchingData = useSelector(isFetchingDataSelector);
  const dataError = useSelector(dataErrorSelector);

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback((newStatus) => dispatch(updateStatus(newStatus)), [dispatch]);
  const updatePhotoCallback = useCallback((photo) => dispatch(updatePhoto(photo)), [dispatch]);
  const updateDataCallback = useCallback(
    (profileData, setStatus, setSubmitting, setEditModeData) => {
      dispatch(updateData(profileData, setStatus, setSubmitting, setEditModeData));
    },
    [dispatch]
  );

  const mounted = useMounted();

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
