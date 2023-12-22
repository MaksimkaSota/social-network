import classes from './ProfilePhoto.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { InputFile } from '../../../../Common/InputFile/InputFile';
import { Preloader } from '../../../../Common/Preloader/Preloader';

export const ProfilePhoto = ({isOwner, photo, updatePhoto, isFetchingPhoto, errorPhoto}) => {
  return (
    <div className={classes.photoBlock}>
      {
        isFetchingPhoto ?
          <Preloader className={classes.photoPreloader} /> :
          <>
            <img className={classes.userPhoto} src={photo || userPhoto} alt="avatar" />
            {errorPhoto && <p className={classes.userPhotoError}>Error {errorPhoto.code}, Failed to update photo</p>}
          </>
      }
      {isOwner && <InputFile actionFile={updatePhoto} />}
    </div>
  );
};
