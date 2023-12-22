import { ProfileInfo } from './ProfileInfo';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMounted } from '../../../../../hooks/useMounted';
import { updateData, updateStatus, updatePhoto } from '../../../../../redux/thunks/profile';
import { statusSelector } from '../../../../../redux/selectors/profile';
import {
  isFetchingStatusSelector,
  isFetchingPhotoSelector,
  isFetchingDataSelector
} from '../../../../../redux/selectors/loading';
import {
  errorStatusSelector,
  errorPhotoSelector,
  errorDataSelector
} from '../../../../../redux/selectors/error';

export const ProfileInfoContainer = ({profile, isOwner}) => {
  const status = useSelector(statusSelector);
  const isFetchingStatus = useSelector(isFetchingStatusSelector);
  const errorStatus = useSelector(errorStatusSelector);
  const isFetchingPhoto = useSelector(isFetchingPhotoSelector);
  const errorPhoto = useSelector(errorPhotoSelector);
  const isFetchingData = useSelector(isFetchingDataSelector);
  const errorData = useSelector(errorDataSelector);

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback(
    (status) => dispatch(updateStatus(status)),
    [dispatch]
  );
  const updatePhotoCallback = useCallback(
    (photo) => dispatch(updatePhoto(photo)),
    [dispatch]
  );
  const updateDataCallback = useCallback(
    (profileData, setStatus, setSubmitting, setEditModeData) => {
      dispatch(updateData(profileData, setStatus, setSubmitting, setEditModeData));
    },
    [dispatch]
  );

  const mounted = useMounted();

  return (
    mounted && <ProfileInfo isOwner={isOwner}
                            profile={profile}
                            status={status}
                            updateStatus={updateStatusCallback}
                            isFetchingStatus={isFetchingStatus}
                            errorStatus={errorStatus}
                            updatePhoto={updatePhotoCallback}
                            isFetchingPhoto={isFetchingPhoto}
                            errorPhoto={errorPhoto}
                            updateData={updateDataCallback}
                            isFetchingData={isFetchingData}
                            errorData={errorData} />
  );
};
