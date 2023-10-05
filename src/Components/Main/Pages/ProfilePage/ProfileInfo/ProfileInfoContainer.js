import { ProfileInfo } from './ProfileInfo';
import { useEffect } from 'react';
import { http } from '../../../../../api/http';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, toggleIsFetchingProfile } from '../../../../../redux/actions/profile';

export const ProfileInfoContainer = () => {
  const profile = useSelector((state) => state.profile.profile);
  const isFetchingProfile = useSelector((state) => state.profile.isFetchingProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleIsFetchingProfile(true));
    http.get(`profile/${2}`)
      .then((response) => {
        dispatch(setProfile(response.data));
        dispatch(toggleIsFetchingProfile(false));
      });
  }, []);

  return (
    <ProfileInfo profile={profile} isFetchingProfile={isFetchingProfile} />
  );
};
