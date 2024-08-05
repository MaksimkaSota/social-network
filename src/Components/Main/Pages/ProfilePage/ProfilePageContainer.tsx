import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProfile, getStatus } from '../../../../redux/thunks/profile';
import { ProfilePage } from './ProfilePage';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { authSelector, profileSelector, viewSelector } from '../../../../redux/selectors/selectors';
import { isFetchingProfileSelector } from '../../../../redux/selectors/loading';
import { profileErrorSelector } from '../../../../redux/selectors/error';
import { RoutePath } from '../../../../utils/types/enums';

export const ProfilePageContainer: FC = (): ReactElement => {
  const { id: authorizedUserId } = useTypedSelector(authSelector);
  const { profile } = useTypedSelector(profileSelector);
  const isFetchingProfile = useTypedSelector(isFetchingProfileSelector);
  const profileError = useTypedSelector(profileErrorSelector);
  const { languageMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();

  const { id: paramId = authorizedUserId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (paramId) {
      dispatch(getProfile(+paramId));
      dispatch(getStatus(+paramId));
    } else {
      navigate(RoutePath.login);
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
      languageMode={languageMode}
    />
  );
};
