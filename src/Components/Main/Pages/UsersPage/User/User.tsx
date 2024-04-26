import type { ReactElement } from 'react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.scss';
import userPhoto from '../../../../../assets/images/user.png';
import { Button } from '../../../../Common/Button/Button';
import { FollowUnfollowError } from '../FollowUnfollowError/FollowUnfollowError';
import { RoutePath } from '../../../../../utils/types/enums';
import type { IUser } from '../../../../../utils/types/api';
import type { FollowUnfollowErrorType } from '../../../../../utils/types/common';

type PropsType = {
  user: IUser;
  subscribersId: Array<number>;
  followErrors: Array<FollowUnfollowErrorType>;
  unfollowErrors: Array<FollowUnfollowErrorType>;
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
};

export const User = memo<PropsType>(
  ({ user, subscribersId, followErrors, unfollowErrors, followUser, unfollowUser }): ReactElement => {
    const onFollow = (id: number) => (): void => {
      followUser(id);
    };
    const onUnfollow = (id: number) => (): void => {
      unfollowUser(id);
    };

    return (
      <div className={classes.user}>
        <div className={classes.userMainBlock}>
          <div className={classes.userPhotoBlock}>
            <NavLink to={`${RoutePath.profile}/${user.id}`}>
              <img className={classes.userPhoto} src={user.photos.small || userPhoto} alt="avatar" />
            </NavLink>
          </div>
          {user.followed ? (
            <>
              <Button onClick={onUnfollow(user.id)} text="Unfollow" disabled={subscribersId.includes(user.id)} />
              <FollowUnfollowError errors={unfollowErrors} userId={user.id} />
            </>
          ) : (
            <>
              <Button onClick={onFollow(user.id)} text="Follow" disabled={subscribersId.includes(user.id)} />
              <FollowUnfollowError errors={followErrors} userId={user.id} />
            </>
          )}
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
  }
);
