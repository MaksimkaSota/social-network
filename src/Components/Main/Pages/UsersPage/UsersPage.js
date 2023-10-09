import classes from './UsersPage.module.scss';
import { User } from './User/User';
import { Paginator } from '../../../Common/Paginator/Paginator';
import { Preloader } from '../../../Common/Preloader/Preloader';

export const UsersPage = ({
                            users,
                            follow,
                            unfollow,
                            page,
                            pageSize,
                            totalCount,
                            setPage,
                            setUsers,
                            setTotalCount,
                            isFetchingUsers,
                            toggleIsFetchingUsers
                          }) => {

  return (
    isFetchingUsers ?
      <Preloader /> :
      <div className={classes.usersPageBlock}>
        <Paginator page={page}
                   pageSize={pageSize}
                   totalCount={totalCount}
                   setUsers={setUsers}
                   setPage={setPage}
                   setTotalCount={setTotalCount}
                   toggleIsFetchingUsers={toggleIsFetchingUsers}
        />
        <div>
          {users.map((user) => <User key={user.id}
                                     user={user}
                                     follow={follow}
                                     unfollow={unfollow} />
          )}
        </div>
      </div>
  );
};
