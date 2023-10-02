import classes from './UsersPage.module.scss';
import { User } from './User/User';

export const UsersPage = ({users, follow, unfollow}) => {
  return (
    <div className={classes.usersPageBlock}>
      {users.map((user) => <User key={user.id}
                                 user={user}
                                 follow={follow}
                                 unfollow={unfollow} />
      )}
    </div>
  );
};
