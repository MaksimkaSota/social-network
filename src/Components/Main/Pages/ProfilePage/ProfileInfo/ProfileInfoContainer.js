import { ProfileInfo } from './ProfileInfo';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useMounted } from '../../../../../hooks/useMounted';
import { getProfile, getStatus, updateStatus } from '../../../../../redux/thunks/profile';

export const ProfileInfoContainer = () => {
  const profile = useSelector((state) => state.profile.profile);
  const isFetchingProfile = useSelector((state) => state.profile.isFetchingProfile);
  const status = useSelector((state) => state.profile.status);
  const isFetchingStatus = useSelector((state) => state.profile.isFetchingStatus);
  const authorizedUserId = useSelector((state) => state.auth.id);

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback(
    (status) => dispatch(updateStatus(status)),
    [dispatch]
  );

  let {id: paramId} = useParams();
  const navigate = useNavigate();

  const mounted = useMounted();

  useEffect(() => {
    if (!paramId) {
      paramId = authorizedUserId;
      if (!paramId) {
        navigate('/login');
      }
    }
    if (paramId) {
      dispatch(getProfile(paramId));
      dispatch(getStatus(paramId));
    }
  }, [paramId]);

  return (
    mounted && <ProfileInfo profile={profile}
                            isFetchingProfile={isFetchingProfile}
                            status={status}
                            updateStatus={updateStatusCallback}
                            isFetchingStatus={isFetchingStatus} />
  );
};
