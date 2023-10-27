import { ProfileInfo } from './ProfileInfo';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMounted } from '../../../../../hooks/useMounted';
import { getProfile, getStatus, updateStatus } from '../../../../../redux/thunks/profile';
import { isFetchingProfileSelector, isFetchingStatusSelector } from '../../../../../redux/selectors/loading';
import { profileSelector, statusSelector } from '../../../../../redux/selectors/profile';
import { idSelector } from '../../../../../redux/selectors/auth';
import { useNavigate, useParams } from 'react-router-dom';

export const ProfileInfoContainer = () => {
  const profile = useSelector(profileSelector);
  const isFetchingProfile = useSelector(isFetchingProfileSelector);
  const status = useSelector(statusSelector);
  const isFetchingStatus = useSelector(isFetchingStatusSelector);
  const authorizedUserId = useSelector(idSelector);

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback(
    (status) => dispatch(updateStatus(status)),
    [dispatch]
  );

  let {id: paramId} = useParams();
  const navigate = useNavigate();

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

  const mounted = useMounted();

  return (
    mounted && <ProfileInfo profile={profile}
                            isFetchingProfile={isFetchingProfile}
                            status={status}
                            updateStatus={updateStatusCallback}
                            isFetchingStatus={isFetchingStatus} />
  );
};
