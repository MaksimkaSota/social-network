import { ProfileInfo } from './ProfileInfo';
import { useEffect } from 'react';
import { http } from '../../../../../api/http';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, toggleIsFetching } from '../../../../../redux/actions/profile';

export const ProfileInfoContainer = () => {
  const profile = useSelector((state) => state.profile.profile);
  const isFetching = useSelector((state) => state.users.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleIsFetching(true));
    http.get(`profile/${2}`)
      .then((response) => {
        dispatch(setProfile(response.data.items));
        dispatch(toggleIsFetching(false));
      });
  }, []);

  return (
    <ProfileInfo profile={profile} isFetching={isFetching} />
  );
};
