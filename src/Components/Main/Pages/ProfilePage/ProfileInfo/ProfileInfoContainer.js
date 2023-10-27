import { ProfileInfo } from './ProfileInfo';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../../../../../redux/thunks/profile';
import { isFetchingStatusSelector } from '../../../../../redux/selectors/loading';
import { profileSelector, statusSelector } from '../../../../../redux/selectors/profile';

export const ProfileInfoContainer = () => {
  const profile = useSelector(profileSelector);
  const status = useSelector(statusSelector);
  const isFetchingStatus = useSelector(isFetchingStatusSelector);

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback(
    (status) => dispatch(updateStatus(status)),
    [dispatch]
  );

  return (
    <ProfileInfo profile={profile}
                 status={status}
                 updateStatus={updateStatusCallback}
                 isFetchingStatus={isFetchingStatus} />
  );
};
