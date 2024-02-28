import { FC, ReactElement, useCallback } from 'react';
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
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';

export const HeaderContainer: FC = (): ReactElement => {
  const isAuth = useTypedSelector(isAuthSelector);
  const loginName = useTypedSelector(loginSelector);
  const authUserPhoto = useTypedSelector(authUserPhotoSelector);
  const isFetchingAuthUserPhoto = useTypedSelector(isFetchingPhotoSelector);
  const authUserPhotoError = useTypedSelector(authUserPhotoErrorSelector);
  const updateUserPhotoError = useTypedSelector(photoErrorSelector);
  const incorrectAuthText = useTypedSelector(incorrectAuthTextSelector);

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
