import classes from './ProfilePage.module.scss';
import { PostsContainer } from './Posts/PostsContainer';
import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';
import { Preloader } from '../../../Common/Preloader/Preloader';
import { Error } from '../../../Common/Error/Error';

export const ProfilePage = ({isFetchingProfile, errorProfile, profile, isOwner}) => {
  if (isFetchingProfile && !Object.keys(profile).length) {
    return (
      <Preloader />
    );
  }

  if (errorProfile) {
    return (
      <Error code={errorProfile.code} message={errorProfile.message} />
    );
  }

  return (
    <div className={classes.profilePageBlock}>
      <ProfileInfoContainer profile={profile} isOwner={isOwner} />
      <PostsContainer />
    </div>
  );
};
