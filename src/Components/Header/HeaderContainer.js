import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';
import { getAuth, logout } from '../../redux/thunks/auth';

export const HeaderContainer = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const loginName = useSelector((state) => state.auth.login);
  const authUserPhoto = useSelector((state) => state.auth.authUserPhoto);

  const dispatch = useDispatch();
  const logoutCallback = useCallback(
    () => dispatch(logout()),
    [dispatch]
  );

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  return (
    <Header isAuth={isAuth} loginName={loginName} authUserPhoto={authUserPhoto} logout={logoutCallback} />
  );
};
