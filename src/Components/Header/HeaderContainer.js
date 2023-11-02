import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';
import { logout } from '../../redux/thunks/auth';
import {
  authUserPhotoSelector,
  incorrectAuthTextSelector,
  isAuthSelector,
  loginSelector
} from '../../redux/selectors/auth';

export const HeaderContainer = () => {
  const isAuth = useSelector(isAuthSelector);
  const loginName = useSelector(loginSelector);
  const authUserPhoto = useSelector(authUserPhotoSelector);
  const incorrectAuthText = useSelector(incorrectAuthTextSelector);

  const dispatch = useDispatch();
  const logoutCallback = useCallback(
    () => dispatch(logout()),
    [dispatch]
  );

  return (
    <Header
      isAuth={isAuth}
      loginName={loginName}
      authUserPhoto={authUserPhoto}
      logout={logoutCallback}
      incorrectAuthText={incorrectAuthText}
    />
  );
};
