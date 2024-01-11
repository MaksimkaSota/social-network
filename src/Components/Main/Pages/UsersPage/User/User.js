import classes from './User.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { Button } from '../../../../Common/Button/Button';
import { FollowUnfollowError } from '../FollowUnfollowError/FollowUnfollowError';
import { NavLink } from 'react-router-dom';

export const User = ({user, subscribersId, followErrors, unfollowErrors, followUser, unfollowUser}) => {
  const onFollow = (id) => () => {
    followUser(id);
  };
  const onUnfollow = (id) => () => {
    unfollowUser(id);
  };

  return (
    <div className={classes.user}>
      <div className={classes.userMainBlock}>
        <div className={classes.userPhotoBlock}>
          <NavLink to={`/profile/${user.id}`}>
            <img className={classes.userPhoto} src={user.photos.small || userPhoto} alt="avatar" />
          </NavLink>
        </div>
        {
          user.followed ?
            <>
              <Button onClick={onUnfollow(user.id)} text="Unfollow" disabled={subscribersId.includes(user.id)} />
              <FollowUnfollowError errors={unfollowErrors} userId={user.id} />
            </> :
            <>
              <Button onClick={onFollow(user.id)} text="Follow" disabled={subscribersId.includes(user.id)} />
              <FollowUnfollowError errors={followErrors} userId={user.id} />
            </>
        }
      </div>
      <div className={classes.userInfoBlock}>
        <div className={classes.title}>About: {user.name}</div>
        <div className={classes.userInfo}>
          <div>
            <span className={classes.infoTitle}>Name: </span>
            <span className={classes.infoText}>{user.name || 'unknown name'}</span>
          </div>
          <div>
            <span className={classes.infoTitle}>Status: </span>
            <span className={classes.infoText}>{user.status || 'unknown status'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
