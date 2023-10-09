import { useEffect } from 'react';
import { http } from '../../api/http';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData, setAuthUserPhoto } from '../../redux/actions/auth';
import { Header } from './Header';

export const HeaderContainer = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);
  const authUserPhoto = useSelector((state) => state.auth.authUserPhoto);

  const dispatch = useDispatch();

  useEffect(() => {
    http.get(`auth/me`)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthData(response.data.data));
          http.get(`profile/${response.data.data.id}`)
            .then((response) => {
              dispatch(setAuthUserPhoto(response.data.photos.small));
            });
        }
      });
  }, []);

  return (
    <Header isAuth={isAuth} login={login} authUserPhoto={authUserPhoto} />
  );
};
