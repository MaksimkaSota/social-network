import { memo } from 'react';
import type { ReactElement } from 'react';
import classes from './ProfilePhoto.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { InputFile } from '../../../../Common/InputFile/InputFile';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { ConnectionError } from '../../../../Common/ConnectionError/ConnectionError';
import { ServerError } from '../../../../Common/ServerError/ServerError';
import { TextKey } from '../../../../../utils/types/enums';
import { altText } from '../../../../../utils/languageLocalization/altText';

type PropsType = {
  isOwner: boolean;
  photo: Nullable<string>;
  updatePhoto: (photo: File) => void;
  isFetchingPhoto: boolean;
  photoError: Nullable<ErrorType>;
  incorrectPhotoText: string;
  languageMode: string;
};

export const ProfilePhoto = memo<PropsType>(
  ({ isOwner, photo, updatePhoto, isFetchingPhoto, photoError, incorrectPhotoText, languageMode }): ReactElement => {
    return (
      <div className={classes.photoBlock}>
        {isFetchingPhoto ? (
          <Preloader className={classes.photoPreloader} />
        ) : (
          <>
            <img className={classes.userPhoto} src={photo || userPhoto} alt={altText.ava[languageMode]} />
            <ConnectionError
              error={photoError}
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
          </>
        )}
        {isOwner && <InputFile actionFile={updatePhoto} languageMode={languageMode} />}
      </div>
    );
  }
);
