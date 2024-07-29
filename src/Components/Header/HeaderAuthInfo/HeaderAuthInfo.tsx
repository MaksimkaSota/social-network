import type { FC, ReactElement } from 'react';
import classes from './HeaderAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../Common/Preloader/Preloader';
import { Button } from '../../Common/Button/Button';
import type { ErrorType, Nullable } from '../../../utils/types/common';

type PropsType = {
  loginName: Nullable<string>;
  authUserPhoto: Nullable<string>;
  isFetchingAuthUserPhoto: boolean;
  authUserPhotoError: Nullable<ErrorType>;
  updateUserPhotoError: Nullable<ErrorType>;
  logout: () => void;
};

export const HeaderAuthInfo: FC<PropsType> = ({
  loginName,
  authUserPhoto,
  isFetchingAuthUserPhoto,
  authUserPhotoError,
  updateUserPhotoError,
  logout,
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
              {authUserPhotoError.code || 'Some'} Error.
              <br />
              Photo is not loaded!
            </p>
          )}
          {updateUserPhotoError && (
            <p className={classes.userPhotoError}>
              {updateUserPhotoError.code || 'Some'} Error.
              <br />
              Photo is not loaded!
            </p>
          )}
        </div>
      )}
      <div className={classes.container}>
        <p className={classes.text}>{loginName}</p>
        <Button text="Logout" onClick={logout} />
      </div>
    </div>
  );
};
