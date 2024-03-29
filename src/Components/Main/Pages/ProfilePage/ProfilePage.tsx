import type { FC, ReactElement } from 'react';
import classes from './ProfilePage.module.scss';
import { PostsContainer } from './Posts/PostsContainer';
import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';
import { Preloader } from '../../../Common/Preloader/Preloader';
import { Error } from '../../../Common/Error/Error';
import type { ErrorType, Nullable } from '../../../../utils/types/common';
import type { IResponseProfile } from '../../../../utils/types/api';

type PropsType = {
  isFetchingProfile: boolean;
  profileError: Nullable<ErrorType>;
  profile: Nullable<IResponseProfile>;
  isOwner: boolean;
};

export const ProfilePage: FC<PropsType> = ({ isFetchingProfile, profileError, profile, isOwner }): ReactElement => {
  if (isFetchingProfile && !profile) {
    return <Preloader />;
  }

  if (profileError) {
    return <Error code={profileError.code} message={profileError.message} />;
  }

  return (
    <div className={classes.profilePageBlock}>
      <ProfileInfoContainer profile={profile} isOwner={isOwner} />
      <PostsContainer />
    </div>
  );
};
