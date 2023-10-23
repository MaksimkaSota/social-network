import { ProfileInfo } from './ProfileInfo';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMounted } from '../../../../../hooks/useMounted';
import { updateStatus } from '../../../../../redux/thunks/profile';

export const ProfileInfoContainer = () => {
  const profile = useSelector((state) => state.profile.profile);
  const status = useSelector((state) => state.profile.status);
  const isFetchingStatus = useSelector((state) => state.profile.isFetchingStatus);

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback(
    (status) => dispatch(updateStatus(status)),
    [dispatch]
  );

  const mounted = useMounted();

  return (
    mounted && <ProfileInfo profile={profile}
                            status={status}
                            updateStatus={updateStatusCallback}
                            isFetchingStatus={isFetchingStatus} />
  );
};
