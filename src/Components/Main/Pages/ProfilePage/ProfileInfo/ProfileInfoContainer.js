import { ProfileInfo } from './ProfileInfo';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMounted } from '../../../../../hooks/useMounted';
import { updateStatus, updatePhoto } from '../../../../../redux/thunks/profile';
import { isFetchingStatusSelector, isFetchingPhotoSelector } from '../../../../../redux/selectors/loading';
import { statusSelector } from '../../../../../redux/selectors/profile';

export const ProfileInfoContainer = ({profile, isOwner}) => {
  const status = useSelector(statusSelector);
  const isFetchingStatus = useSelector(isFetchingStatusSelector);
  const isFetchingPhoto = useSelector(isFetchingPhotoSelector)

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback(
    (status) => dispatch(updateStatus(status)),
    [dispatch]
  );
  const updatePhotoCallback = useCallback(
    (status) => dispatch(updatePhoto(status)),
    [dispatch]
  );

  const mounted = useMounted();

  return (
    mounted && <ProfileInfo profile={profile}
                            isOwner={isOwner}
                            status={status}
                            updateStatus={updateStatusCallback}
                            isFetchingStatus={isFetchingStatus}
                            updatePhoto={updatePhotoCallback}
                            isFetchingPhoto={isFetchingPhoto} />
  );
};
