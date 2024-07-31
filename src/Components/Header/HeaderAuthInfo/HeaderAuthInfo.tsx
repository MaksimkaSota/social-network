import type { FC, ReactElement } from 'react';
import classes from './HeaderAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../Common/Preloader/Preloader';
import { Button } from '../../Common/Button/Button';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import { contentText } from '../../../utils/languageLocalization/contentText';
import { errorText } from '../../../utils/languageLocalization/errorText';

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
  return (
    <div className={classes.headerAuthInfo}>
      {isFetchingAuthUserPhoto ? (
        <Preloader className={classes.authUserPhotoPreloader} />
      ) : (
        <div>
          <img className={classes.userPhoto} src={authUserPhoto || userPhoto} alt="avatar" />
          {authUserPhotoError && (
            <p className={classes.userPhotoError}>
              {authUserPhotoError.code || errorText.some[languageMode]} {errorText.error[languageMode]}.
              <br />
              {errorText.photo[languageMode]}!
            </p>
          )}
          {updateUserPhotoError && (
            <p className={classes.userPhotoError}>
              {updateUserPhotoError.code || errorText.some[languageMode]} {errorText.error[languageMode]}.
              <br />
              {errorText.photo[languageMode]}!
            </p>
          )}
        </div>
      )}
      <div className={classes.container}>
        <p className={classes.text}>{loginName}</p>
        <Button text={contentText.logoutBtn[languageMode]} onClick={logout} />
      </div>
    </div>
  );
};
