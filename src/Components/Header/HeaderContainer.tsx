import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';
import { logout } from '../../redux/thunks/auth';
import {
  authUserPhotoSelector,
  authUserPhotoErrorSelector,
  incorrectAuthTextSelector,
  isAuthSelector,
  loginSelector,
} from '../../redux/selectors/auth';
import { isFetchingPhotoSelector } from '../../redux/selectors/loading';
import { photoErrorSelector } from '../../redux/selectors/error';

export const HeaderContainer = () => {
  const isAuth = useSelector(isAuthSelector);
  const loginName = useSelector(loginSelector);
  const authUserPhoto = useSelector(authUserPhotoSelector);
  const isFetchingAuthUserPhoto = useSelector(isFetchingPhotoSelector);
  const authUserPhotoError = useSelector(authUserPhotoErrorSelector);
  const updateUserPhotoError = useSelector(photoErrorSelector);
  const incorrectAuthText = useSelector(incorrectAuthTextSelector);

  const dispatch = useDispatch();
  const logoutCallback = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <Header
      isAuth={isAuth}
      loginName={loginName}
      authUserPhoto={authUserPhoto}
      isFetchingAuthUserPhoto={isFetchingAuthUserPhoto}
      authUserPhotoError={authUserPhotoError}
      updateUserPhotoError={updateUserPhotoError}
      logout={logoutCallback}
      incorrectAuthText={incorrectAuthText}
    />
  );
};
