import { ProfilePage } from './ProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile, getStatus } from '../../../../redux/thunks/profile';
import { useNavigate, useParams } from 'react-router-dom';
import { isFetchingProfileSelector } from '../../../../redux/selectors/loading';
import { idSelector } from '../../../../redux/selectors/auth';
import { useMounted } from '../../../../hooks/useMounted';

export const ProfilePageContainer = () => {
  const isFetchingProfile = useSelector(isFetchingProfileSelector);
  const authorizedUserId = useSelector(idSelector);

  const dispatch = useDispatch();

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
    mounted && <ProfilePage isFetchingProfile={isFetchingProfile} />
  );
};
