import classes from './UsersPage.module.scss';
import { User } from './User/User';
import { Paginator } from '../../../Common/Paginator/Paginator';

export const UsersPage = ({users, follow, unfollow, page, pageSize, totalCount, setPage, setUsers, setTotalCount}) => {
  return (
    <div className={classes.usersPageBlock}>
      <Paginator page={page}
                 pageSize={pageSize}
                 totalCount={totalCount}
                 setUsers={setUsers}
                 setPage={setPage}
                 setTotalCount={setTotalCount}
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
