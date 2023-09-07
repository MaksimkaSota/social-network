import classes from './ProfilePage.module.scss';
import { PostsContainer } from './Posts/PostsContainer';

export const ProfilePage = () => {
  return (
    <div className={classes.profilePageBlock}>
      <div className={classes.info}>
        <h3 className={classes.title}>My profile info</h3>
      </div>
      <PostsContainer />
    </div>
  );
};
