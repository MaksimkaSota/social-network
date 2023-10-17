import { ProfileInfo } from './ProfileInfo';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMounted } from '../../../../../hooks/useMounted';
import { getProfile, getStatus, updateStatus } from '../../../../../redux/thunks/profile';

export const ProfileInfoContainer = () => {
  const profile = useSelector((state) => state.profile.profile);
  const isFetchingProfile = useSelector((state) => state.profile.isFetchingProfile);
  const status = useSelector((state) => state.profile.status);
  const isFetchingStatus = useSelector((state) => state.profile.isFetchingStatus);

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback(
    (status) => dispatch(updateStatus(status)),
    [dispatch]
  );

  let {id} = useParams();

  const mounted = useMounted();

  useEffect(() => {
    if (!id) {
      id = 29516;
    }
    dispatch(getProfile(id));
    dispatch(getStatus(id));
  }, [id]);

  return (
    mounted && <ProfileInfo profile={profile}
                            isFetchingProfile={isFetchingProfile}
                            status={status}
                            updateStatus={updateStatusCallback}
                            isFetchingStatus={isFetchingStatus} />
  );
};
