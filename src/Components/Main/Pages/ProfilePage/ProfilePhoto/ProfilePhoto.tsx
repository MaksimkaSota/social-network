import { memo, type ReactElement } from 'react';
import classes from './ProfilePhoto.module.scss';
import { Avatar } from '../../../../Common/Avatar/Avatar';
import { InputFile } from '../../../../Common/InputFile/InputFile';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { ConnectionError } from '../../../../Common/ConnectionError/ConnectionError';
import { ServerError } from '../../../../Common/ServerError/ServerError';
import { TextKey } from '../../../../../utils/types/enums';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';

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
            <Avatar avatar={photo} className={classes.userPhoto} languageMode={languageMode} />
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
