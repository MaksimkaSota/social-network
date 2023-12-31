import classes from './ProfilePage.module.scss';
import { PostsContainer } from './Posts/PostsContainer';
import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';
import { Preloader } from '../../../Common/Preloader/Preloader';

export const ProfilePage = ({isFetchingProfile, profile, isOwner}) => {
  return (
    isFetchingProfile && !Object.keys(profile).length ?
      <Preloader /> :
      <div className={classes.profilePageBlock}>
        <ProfileInfoContainer profile={profile} isOwner={isOwner}/>
        <PostsContainer />
      </div>
  );
};
