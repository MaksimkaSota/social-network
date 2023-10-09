import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData, setAuthUserPhoto } from '../../redux/actions/auth';
import { Header } from './Header';
import { getAuthAPI } from '../../api/auth';
import { getProfileAPI } from '../../api/profile';

export const HeaderContainer = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);
  const authUserPhoto = useSelector((state) => state.auth.authUserPhoto);

  const dispatch = useDispatch();

  useEffect(() => {
    getAuthAPI()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthData(data.data));
          getProfileAPI(data.data.id)
            .then((data) => {
              dispatch(setAuthUserPhoto(data.photos.small));
            });
        }
      });
  }, []);

  return (
    <Header isAuth={isAuth} login={login} authUserPhoto={authUserPhoto} />
  );
};
