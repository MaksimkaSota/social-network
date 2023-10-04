import classes from './ProfilePage.module.scss';
import { PostsContainer } from './Posts/PostsContainer';
import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';

export const ProfilePage = () => {
  return (
    <div className={classes.profilePageBlock}>
      <ProfileInfoContainer />
      <PostsContainer />
    </div>
  );
};
