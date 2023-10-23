import { ProfilePage } from './ProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile, getStatus } from '../../../../redux/thunks/profile';
import { useNavigate, useParams } from 'react-router-dom';

export const ProfilePageContainer = () => {
  const isFetchingProfile = useSelector((state) => state.profile.isFetchingProfile);
  const authorizedUserId = useSelector((state) => state.auth.id);

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

  return (
    <ProfilePage isFetchingProfile={isFetchingProfile} />
  );
};
