import type { FC, ReactElement } from 'react';
import classes from './UsersPage.module.scss';
import { User } from './User/User';
import { Paginator } from '../../../Common/Paginator/Paginator';
import { Preloader } from '../../../Common/Preloader/Preloader';
import { Error } from '../../../Common/Error/Error';
import type { ErrorType, FollowUnfollowErrorType, Nullable } from '../../../../utils/types/common';
import type { IUser } from '../../../../utils/types/api';

type PropsType = {
  users: Array<IUser>;
  page: number;
  pageSize: number;
  totalCount: number;
  isFetchingUsers: boolean;
  usersError: Nullable<ErrorType>;
  subscribersId: Array<number>;
  followErrors: Array<FollowUnfollowErrorType>;
  unfollowErrors: Array<FollowUnfollowErrorType>;
  getUsers: (currentPage: number, currentPageSize: number) => void;
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
};

export const UsersPage: FC<PropsType> = ({
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
  unfollowUser,
}): ReactElement => {
  if (isFetchingUsers && !users.length) {
    return <Preloader />;
  }

  if (usersError) {
    return <Error code={usersError.code} message={usersError.message} />;
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
        {users.map(
          (user: IUser): ReactElement => (
            <User
              key={user.id}
              user={user}
              subscribersId={subscribersId}
              followErrors={followErrors}
              unfollowErrors={unfollowErrors}
              followUser={followUser}
              unfollowUser={unfollowUser}
            />
          )
        )}
      </div>
    </div>
  );
};
