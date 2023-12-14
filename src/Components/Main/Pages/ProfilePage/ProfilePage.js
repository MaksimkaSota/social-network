import classes from './ProfilePage.module.scss';
import { PostsContainer } from './Posts/PostsContainer';
import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';
import { Preloader } from '../../../Common/Preloader/Preloader';

export const ProfilePage = ({isFetchingProfile, errorProfile, profile, isOwner}) => {
  if (isFetchingProfile && !Object.keys(profile).length) {
    return (
      <Preloader />
    );
  }

  if (errorProfile) {
    return (
      <div>
        <h3>Error Page</h3>
        <p>{errorProfile.code}</p>
        <p>{errorProfile.message}</p>
      </div>
    );
  }

  return (
    <div className={classes.profilePageBlock}>
      <ProfileInfoContainer profile={profile} isOwner={isOwner} />
      <PostsContainer />
    </div>
  );
};
