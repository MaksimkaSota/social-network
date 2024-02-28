import { FC, ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProfile, getStatus } from '../../../../redux/thunks/profile';
import { ProfilePage } from './ProfilePage';
import { isFetchingProfileSelector } from '../../../../redux/selectors/loading';
import { profileErrorSelector } from '../../../../redux/selectors/error';
import { idSelector } from '../../../../redux/selectors/auth';
import { profileSelector } from '../../../../redux/selectors/profile';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';

export const ProfilePageContainer: FC = (): ReactElement => {
  const profile = useTypedSelector(profileSelector);
  const isFetchingProfile = useTypedSelector(isFetchingProfileSelector);
  const profileError = useTypedSelector(profileErrorSelector);
  const authorizedUserId = useTypedSelector(idSelector);

  const dispatch = useTypedDispatch();

  const { id: paramId = authorizedUserId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (paramId) {
      dispatch(getProfile(+paramId));
      dispatch(getStatus(+paramId));
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [dispatch, paramId]);

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
