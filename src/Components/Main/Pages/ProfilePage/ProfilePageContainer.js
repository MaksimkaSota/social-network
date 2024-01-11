import { ProfilePage } from './ProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile, getStatus } from '../../../../redux/thunks/profile';
import { useNavigate, useParams } from 'react-router-dom';
import { isFetchingProfileSelector } from '../../../../redux/selectors/loading';
import { profileErrorSelector } from '../../../../redux/selectors/error';
import { idSelector } from '../../../../redux/selectors/auth';
import { profileSelector } from '../../../../redux/selectors/profile';

export const ProfilePageContainer = () => {
  const profile = useSelector(profileSelector);
  const isFetchingProfile = useSelector(isFetchingProfileSelector);
  const profileError = useSelector(profileErrorSelector);
  const authorizedUserId = useSelector(idSelector);

  const dispatch = useDispatch();

  let {id: paramId = authorizedUserId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (paramId) {
      dispatch(getProfile(paramId));
      dispatch(getStatus(paramId));
    } else {
      navigate('/login');
    }
  }, [paramId]);

  const isOwner = paramId === authorizedUserId;

  return (
    <ProfilePage
      isFetchingProfile={isFetchingProfile}
      profileError={profileError}
      profile={profile}
      isOwner={isOwner}
    />
  );
};
