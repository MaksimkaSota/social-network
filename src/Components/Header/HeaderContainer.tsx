import type { FC, ReactElement } from 'react';
import { Header } from './Header';
import { logout } from '../../redux/thunks/auth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { authSelector, profileSelector, viewSelector } from '../../redux/selectors/selectors';
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
  const { incorrectPhotoText } = useTypedSelector(profileSelector);
  const isFetchingAuthUserPhoto = useTypedSelector(isFetchingPhotoSelector);
  const updateUserPhotoError = useTypedSelector(photoErrorSelector);
  const { languageMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();
  const logoutCallback = () => dispatch(logout());

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
      incorrectPhotoText={incorrectPhotoText}
      languageMode={languageMode}
    />
  );
};
