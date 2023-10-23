import classes from './ProfilePage.module.scss';
import { PostsContainer } from './Posts/PostsContainer';
import { ProfileInfoContainer } from './ProfileInfo/ProfileInfoContainer';
import { Preloader } from '../../../Common/Preloader/Preloader';

export const ProfilePage = ({isFetchingProfile}) => {
  return (
    isFetchingProfile ?
      <Preloader /> :
      <div className={classes.profilePageBlock}>
        <ProfileInfoContainer />
        <PostsContainer />
      </div>
  );
};
