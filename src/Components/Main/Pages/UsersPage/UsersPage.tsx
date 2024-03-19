import type { FC, ReactElement } from 'react';
import classes from './UsersPage.module.scss';
import { User } from './User/User';
import { Paginator } from '../../../Common/Paginator/Paginator';
import { Preloader } from '../../../Common/Preloader/Preloader';
import { Error } from '../../../Common/Error/Error';
import type { ErrorType, FilterType, FollowUnfollowErrorType, Nullable } from '../../../../utils/types/common';
import type { IUser } from '../../../../utils/types/api';
import { UsersSearchFormContainer } from './UsersSearchForm/UsersSearchFormContainer';
import type { SetSubmittingType } from '../../../../utils/types/form';

type PropsType = {
  users: Array<IUser>;
  page: number;
  pageSize: number;
  filter: FilterType;
  totalCount: number;
  isFetchingUsers: boolean;
  usersError: Nullable<ErrorType>;
  subscribersId: Array<number>;
  followErrors: Array<FollowUnfollowErrorType>;
  unfollowErrors: Array<FollowUnfollowErrorType>;
  getUsers: (
    currentPage: number,
    currentPageSize: number,
    currentFilter: FilterType,
    setSubmitting?: SetSubmittingType
  ) => void;
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
};

export const UsersPage: FC<PropsType> = ({
  users,
  page,
  pageSize,
  filter,
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
      <UsersSearchFormContainer page={page} pageSize={pageSize} filter={filter} getUsers={getUsers} />
      {!!users.length && (
        <Paginator
          page={page}
          pageSize={pageSize}
          filter={filter}
          totalCount={totalCount}
          onCurrentPageCallback={getUsers}
          isFetching={isFetchingUsers}
        />
      )}
      <div>
        {!isFetchingUsers && !users.length ? (
          <p className={classes.notFoundMessage}>Users not found</p>
        ) : (
          users.map(
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
          )
        )}
      </div>
    </div>
  );
};
