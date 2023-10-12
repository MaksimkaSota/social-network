import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';
import { getAuth } from '../../redux/thunks/auth';

export const HeaderContainer = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);
  const authUserPhoto = useSelector((state) => state.auth.authUserPhoto);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  return (
    <Header isAuth={isAuth} login={login} authUserPhoto={authUserPhoto} />
  );
};
