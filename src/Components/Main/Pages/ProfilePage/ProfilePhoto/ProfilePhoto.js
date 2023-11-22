import classes from './ProfilePhoto.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { InputFile } from '../../../../Common/InputFile/InputFile';

export const ProfilePhoto = ({isOwner, photo}) => {
  return (
    <div className={classes.photoBlock}>
      <img
        className={classes.userPhoto}
        src={photo || userPhoto}
        alt="avatar"
      />
      {isOwner && <InputFile />}
    </div>
  );
};
