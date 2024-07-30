import type { FC, ReactElement } from 'react';
import classes from './HeaderAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../Common/Preloader/Preloader';
import { Button } from '../../Common/Button/Button';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import { textContent } from '../../../utils/textContent';

type PropsType = {
  loginName: Nullable<string>;
  authUserPhoto: Nullable<string>;
  isFetchingAuthUserPhoto: boolean;
  authUserPhotoError: Nullable<ErrorType>;
  updateUserPhotoError: Nullable<ErrorType>;
  logout: () => void;
  languageMode: string;
};

export const HeaderAuthInfo: FC<PropsType> = ({
  loginName,
  authUserPhoto,
  isFetchingAuthUserPhoto,
  authUserPhotoError,
  updateUserPhotoError,
  logout,
  languageMode,
}): ReactElement => {
  const error = languageMode === 'en' ? 'Some' : 'Некоторая';

  return (
    <div className={classes.headerAuthInfo}>
      {isFetchingAuthUserPhoto ? (
        <Preloader className={classes.authUserPhotoPreloader} />
      ) : (
        <div>
          <img className={classes.userPhoto} src={authUserPhoto || userPhoto} alt="avatar" />
          {authUserPhotoError && (
            <p className={classes.userPhotoError}>
              {authUserPhotoError.code || error} {textContent.error[languageMode]}.
              <br />
              {textContent.headerPhotoErr[languageMode]}!
            </p>
          )}
          {updateUserPhotoError && (
            <p className={classes.userPhotoError}>
              {updateUserPhotoError.code || error} {textContent.error[languageMode]}.
              <br />
              {textContent.headerPhotoErr[languageMode]}!
            </p>
          )}
        </div>
      )}
      <div className={classes.container}>
        <p className={classes.text}>{loginName}</p>
        <Button text={textContent.logoutBtn[languageMode]} onClick={logout} />
      </div>
    </div>
  );
};
