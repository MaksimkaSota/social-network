import { ProfileInfo } from './ProfileInfo';
import { useEffect } from 'react';
import { http } from '../../../../../api/http';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, toggleIsFetchingProfile } from '../../../../../redux/actions/profile';
import { useParams } from 'react-router-dom';
import { useMounted } from '../../../../../hooks/useMounted';

export const ProfileInfoContainer = () => {
  const profile = useSelector((state) => state.profile.profile);
  const isFetchingProfile = useSelector((state) => state.profile.isFetchingProfile);

  const dispatch = useDispatch();

  let {id} = useParams();

  const mounted = useMounted();

  useEffect(() => {
    if (!id) {
      id = 29516;
    }
    dispatch(toggleIsFetchingProfile(true));
    http.get(`profile/${id}`)
      .then((response) => {
        dispatch(setProfile(response.data));
        dispatch(toggleIsFetchingProfile(false));
      });
  }, [id]);

  return (
    mounted && <ProfileInfo profile={profile} isFetchingProfile={isFetchingProfile} />
  );
};
