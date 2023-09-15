import classes from './User.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { Button } from '../../../../Common/Button/Button';

export const User = ({user, follow, unfollow}) => {
  const onFollow = (id) => () => {
    follow(id);
  };
  const onUnfollow = (id) => () => {
    unfollow(id);
  };

  return (
    <div className={classes.user}>
      <div className={classes.userMainBlock}>
        <div className={classes.userPhotoBlock}>
          <img className={classes.userPhoto} src={user.userPhotoURL || userPhoto} alt="avatar" />
        </div>
        {
          user.followed ?
            <Button onClick={onUnfollow(user.id)} text="Unfollow" /> :
            <Button onClick={onFollow(user.id)} text="Follow" />
        }
      </div>
      <div className={classes.userInfoBlock}>
        <div className={classes.title}>About {user.name}</div>
        <div className={classes.userInfo}>
          <div>
            <span className={classes.infoTitle}>Name: </span>
            <span className={classes.infoText}>{user.name || 'user name'}</span>
          </div>
          <div>
            <span className={classes.infoTitle}>Status: </span>
            <span className={classes.infoText}>{user.status || 'user status'}</span>
          </div>
          <div>
            <span className={classes.infoTitle}>City: </span>
            <span className={classes.infoText}>{user.location.city || 'user city'}</span>
          </div>
          <div>
            <span className={classes.infoTitle}>Country: </span>
            <span className={classes.infoText}>{user.location.country || 'user country'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
