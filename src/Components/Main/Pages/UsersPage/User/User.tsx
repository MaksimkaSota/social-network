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
import { contentText } from '../../../../../utils/languageLocalization/contentText';

type PropsType = {
  user: IUser;
  subscribersId: number[];
  followErrors: FollowUnfollowErrorType[];
  unfollowErrors: FollowUnfollowErrorType[];
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  languageMode: string;
};

export const User = memo<PropsType>(
  ({ user, subscribersId, followErrors, unfollowErrors, followUser, unfollowUser, languageMode }): ReactElement => {
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
              <Button
                className={classes.userButton}
                onClick={onUnfollow(user.id)}
                text={contentText.unfollowBtn[languageMode]}
                disabled={subscribersId.includes(user.id)}
              />
              <FollowUnfollowError errors={unfollowErrors} userId={user.id} languageMode={languageMode} />
            </>
          ) : (
            <>
              <Button
                className={classes.userButton}
                onClick={onFollow(user.id)}
                text={contentText.followBtn[languageMode]}
                disabled={subscribersId.includes(user.id)}
              />
              <FollowUnfollowError errors={followErrors} userId={user.id} languageMode={languageMode} />
            </>
          )}
        </div>
        <div className={classes.userInfoBlock}>
          <div className={classes.title}>
            {contentText.aboutUser[languageMode]}: {user.name}
          </div>
          <div className={classes.userInfo}>
            <div>
              <span className={classes.infoTitle}>Name: </span>
              <span className={classes.infoText}>{user.name || contentText.noName[languageMode]}</span>
            </div>
            <div>
              <span className={classes.infoTitle}>Status: </span>
              <span className={classes.infoText}>{user.status || contentText.noStatus[languageMode]}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
