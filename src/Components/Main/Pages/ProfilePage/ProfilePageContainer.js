import { ProfilePage } from './ProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile, getStatus } from '../../../../redux/thunks/profile';
import { useNavigate, useParams } from 'react-router-dom';
import { isFetchingProfileSelector } from '../../../../redux/selectors/loading';
import { idSelector } from '../../../../redux/selectors/auth';
import { profileSelector } from '../../../../redux/selectors/profile';
import { errorProfileSelector } from '../../../../redux/selectors/error';

export const ProfilePageContainer = () => {
  const profile = useSelector(profileSelector);
  const isFetchingProfile = useSelector(isFetchingProfileSelector);
  const errorProfile = useSelector(errorProfileSelector);
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
      errorProfile={errorProfile}
      profile={profile}
      isOwner={isOwner}
    />
  );
};
