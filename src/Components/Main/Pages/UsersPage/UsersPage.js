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
                            usersError,
                            subscribersId,
                            followErrors,
                            unfollowErrors,
                            getUsers,
                            followUser,
                            unfollowUser
                          }) => {
  if (isFetchingUsers && !users.length) {
    return (
      <Preloader />
    );
  }

  if (usersError) {
    return (
      <Error code={usersError.code} message={usersError.message} />
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
                                   followErrors={followErrors}
                                   unfollowErrors={unfollowErrors}
                                   followUser={followUser}
                                   unfollowUser={unfollowUser} />
        )}
      </div>
    </div>
  );
};
