import { ProfileInfo } from './ProfileInfo';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMounted } from '../../../../../hooks/useMounted';
import { updateData, updateStatus, updatePhoto } from '../../../../../redux/thunks/profile';
import { isFetchingStatusSelector, isFetchingPhotoSelector } from '../../../../../redux/selectors/loading';
import { statusSelector } from '../../../../../redux/selectors/profile';

export const ProfileInfoContainer = ({profile, isOwner}) => {
  const status = useSelector(statusSelector);
  const isFetchingStatus = useSelector(isFetchingStatusSelector);
  const isFetchingPhoto = useSelector(isFetchingPhotoSelector);

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
    (profile, setStatus, setSubmitting, setEditModeData, dataKeys, contactsDataKeys) => {
      return dispatch(updateData(profile, setStatus, setSubmitting, setEditModeData, dataKeys, contactsDataKeys));
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
                            updatePhoto={updatePhotoCallback}
                            isFetchingPhoto={isFetchingPhoto}
                            updateData={updateDataCallback} />
  );
};
