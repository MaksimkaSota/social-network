import classes from './HeaderAuthInfo.module.scss';
import userPhoto from '../../../assets/images/user.png';
import { Preloader } from '../../Common/Preloader/Preloader';
import { Button } from '../../Common/Button/Button';

export const HeaderAuthInfo = ({loginName, authUserPhoto, isFetchingAuthUserPhoto, errorAuthUserPhoto, logout}) => {
  return (
    <div className={classes.headerAuthInfo}>
      {
        isFetchingAuthUserPhoto ?
          <Preloader className={classes.authUserPhotoPreloader} /> :
          <>
            <img className={classes.userPhoto} src={authUserPhoto || userPhoto} alt="avatar" />
            {errorAuthUserPhoto && <p className={classes.userPhotoError}>Error {errorAuthUserPhoto.code}</p>}
          </>
      }
      <p className={classes.text}>{loginName}</p>
      <Button text="Logout" onClick={logout} />
    </div>
  );
};
