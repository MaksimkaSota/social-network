import classes from './UsersPage.module.scss';
import { User } from './User/User';
import { Paginator } from '../../../Common/Paginator/Paginator';
import { Preloader } from '../../../Common/Preloader/Preloader';

export const UsersPage = ({
                            users,
                            page,
                            pageSize,
                            totalCount,
                            isFetchingUsers,
                            subscribersId,
                            getUsers,
                            followUser,
                            unfollowUser
                          }) => {

  return (
    isFetchingUsers ?
      <Preloader /> :
      <div className={classes.usersPageBlock}>
        <Paginator page={page} pageSize={pageSize} totalCount={totalCount} onCurrentPageCallback={getUsers} />
        <div>
          {users.map((user) => <User key={user.id}
                                     user={user}
                                     subscribersId={subscribersId}
                                     followUser={followUser}
                                     unfollowUser={unfollowUser} />
          )}
        </div>
      </div>
  );
};
