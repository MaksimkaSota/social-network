import { memo } from 'react';
import type { ReactElement } from 'react';
import classes from './HeaderAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../Common/Preloader/Preloader';
import { Button } from '../../Common/Button/Button';
import type { ErrorType, Nullable } from '../../../utils/types/common';
import { contentText } from '../../../utils/languageLocalization/contentText';
import { ConnectionError } from '../../Common/ConnectionError/ConnectionError';
import { ServerError } from '../../Common/ServerError/ServerError';
import { TextKey } from '../../../utils/types/enums';
import { altText } from '../../../utils/languageLocalization/altText';

type PropsType = {
  loginName: Nullable<string>;
  authUserPhoto: Nullable<string>;
  isFetchingAuthUserPhoto: boolean;
  authUserPhotoError: Nullable<ErrorType>;
  updateUserPhotoError: Nullable<ErrorType>;
  incorrectPhotoText: string;
  logout: () => void;
  languageMode: string;
};

export const HeaderAuthInfo = memo<PropsType>(
  ({
    loginName,
    authUserPhoto,
    isFetchingAuthUserPhoto,
    authUserPhotoError,
    updateUserPhotoError,
    incorrectPhotoText,
    logout,
    languageMode,
  }): ReactElement => {
    return (
      <div className={classes.headerAuthInfo}>
        {isFetchingAuthUserPhoto ? (
          <Preloader className={classes.authUserPhotoPreloader} />
        ) : (
          <div className={classes.photoAndErrorBlock}>
            <img className={classes.userPhoto} src={authUserPhoto || userPhoto} alt={altText.ava[languageMode]} />
            <ConnectionError
              error={authUserPhotoError}
              errorTextKey={TextKey.loadPhoto}
              languageMode={languageMode}
              className={classes.userPhotoError}
            />
            <ConnectionError
              error={updateUserPhotoError}
              errorTextKey={TextKey.updatePhoto}
              languageMode={languageMode}
              className={classes.userPhotoError}
            />
            <ServerError
              incorrectText={incorrectPhotoText}
              incorrectTextKey={TextKey.incorrectPhoto}
              languageMode={languageMode}
              className={classes.userPhotoError}
            />
          </div>
        )}
        <div className={classes.container}>
          <p className={classes.text}>{loginName}</p>
          <Button text={contentText.logoutBtn[languageMode]} onClick={logout} />
        </div>
      </div>
    );
  }
);
