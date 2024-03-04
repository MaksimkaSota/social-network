import { FC, ReactElement } from 'react';
import classes from './HeaderAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../Common/Preloader/Preloader';
import { Button } from '../../Common/Button/Button';
import { Nullable } from '../../../utils/types/common';
import { ErrorType } from '../../../redux/types/error';

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
        <>
          <img className={classes.userPhoto} src={authUserPhoto || userPhoto} alt="avatar" />
          {authUserPhotoError && (
            <p className={classes.userPhotoError}>
              Error {authUserPhotoError.code}. <br />
              Photo is not loaded!
            </p>
          )}
          {updateUserPhotoError && (
            <p className={classes.userPhotoError}>
              Error {updateUserPhotoError.code}. <br />
              Photo is not loaded!
            </p>
          )}
        </>
      )}
      <p className={classes.text}>{loginName}</p>
      <Button text="Logout" onClick={logout} />
    </div>
  );
};
