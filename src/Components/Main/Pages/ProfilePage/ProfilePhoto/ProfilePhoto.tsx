import React, { ReactElement } from 'react';
import classes from './ProfilePhoto.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { InputFile } from '../../../../Common/InputFile/InputFile';
import { Preloader } from '../../../../Common/Preloader/Preloader';
import { ErrorType, Nullable } from '../../../../../utils/types/common';

type PropsType = {
  isOwner: boolean;
  photo: Nullable<string>;
  updatePhoto: (photo: File) => void;
  isFetchingPhoto: boolean;
  photoError: Nullable<ErrorType>;
};

export const ProfilePhoto = React.memo<PropsType>(
  ({ isOwner, photo, updatePhoto, isFetchingPhoto, photoError }): ReactElement => {
    return (
      <div className={classes.photoBlock}>
        {isFetchingPhoto ? (
          <Preloader className={classes.photoPreloader} />
        ) : (
          <>
            <img className={classes.userPhoto} src={photo || userPhoto} alt="avatar" />
            {photoError && <p className={classes.userPhotoError}>Error {photoError.code}, Failed to update photo</p>}
          </>
        )}
        {isOwner && <InputFile actionFile={updatePhoto} />}
      </div>
    );
  }
);
