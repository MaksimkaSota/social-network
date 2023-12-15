import classes from './UsersPage.module.scss';
import { User } from './User/User';
import { Paginator } from '../../../Common/Paginator/Paginator';
import { Preloader } from '../../../Common/Preloader/Preloader';
import { Error } from '../../../Common/Error/Error';

export const UsersPage = ({
                            users,
                            page,
                            pageSize,
                            totalCount,
                            isFetchingUsers,
                            errorUsers,
                            subscribersId,
                            getUsers,
                            followUser,
                            unfollowUser
                          }) => {
  if (isFetchingUsers && !users.length) {
    return (
      <Preloader />
    );
  }

  if (errorUsers) {
    return (
      <Error code={errorUsers.code} message={errorUsers.message} />
    );
  }

  return (
    <div className={classes.usersPageBlock}>
      <Paginator
        page={page}
        pageSize={pageSize}
        totalCount={totalCount}
        onCurrentPageCallback={getUsers}
        isFetching={isFetchingUsers}
      />
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
