import type { FC, ReactElement } from 'react';
import { useCallback } from 'react';
import { Header } from './Header';
import { logout } from '../../redux/thunks/auth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { authSelector } from '../../redux/selectors/selectors';
import { isFetchingPhotoSelector } from '../../redux/selectors/loading';
import { photoErrorSelector } from '../../redux/selectors/error';

export const HeaderContainer: FC = (): ReactElement => {
  const {
    isAuth,
    login: loginName,
    authUserPhoto,
    authUserPhotoError,
    incorrectAuthText,
  } = useTypedSelector(authSelector);
  const isFetchingAuthUserPhoto = useTypedSelector(isFetchingPhotoSelector);
  const updateUserPhotoError = useTypedSelector(photoErrorSelector);

  const dispatch = useTypedDispatch();
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
