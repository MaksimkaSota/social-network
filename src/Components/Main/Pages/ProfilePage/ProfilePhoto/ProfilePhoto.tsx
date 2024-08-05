import { memo } from 'react';
import type { ReactElement } from 'react';
import classes from './ProfilePhoto.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { InputFile } from '../../../../Common/InputFile/InputFile';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import type { ErrorType, Nullable } from '../../../../../utils/types/common';
import { errorText } from '../../../../../utils/languageLocalization/errorText';
import { Language } from '../../../../../utils/types/enums';

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
            <img className={classes.userPhoto} src={photo || userPhoto} alt="avatar" />
            {photoError && (
              <p className={classes.userPhotoError}>
                {photoError.code || errorText.some[languageMode]} {errorText.error[languageMode]}.
                <br />
                {errorText.updatePhoto[languageMode]}!
              </p>
            )}
            {incorrectPhotoText && languageMode === Language.en && (
              <p className={classes.userPhotoError}>{incorrectPhotoText}!</p>
            )}
            {incorrectPhotoText && languageMode === Language.ru && (
              <p className={classes.userPhotoError}>{errorText.incorrectPhotoText.ru}!</p>
            )}
          </>
        )}
        {isOwner && <InputFile actionFile={updatePhoto} languageMode={languageMode} />}
      </div>
    );
  }
);
