import { ProfileInfo } from './ProfileInfo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMounted } from '../../../../../hooks/useMounted';
import { getProfile } from '../../../../../redux/thunks/profile';

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
    dispatch(getProfile(id));
  }, [id]);

  return (
    mounted && <ProfileInfo profile={profile} isFetchingProfile={isFetchingProfile} />
  );
};
