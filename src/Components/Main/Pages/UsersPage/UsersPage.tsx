import type { FC, ReactElement } from 'react';
import classes from './UsersPage.module.scss';
import { User } from './User/User';
import { Paginator } from '../../../Common/Paginator/Paginator';
import { Preloader } from '../../../Common/Preloader/Preloader';
import { Error } from '../../../Common/Error/Error';
import { UsersSearchFormContainer } from './UsersSearchForm/UsersSearchFormContainer';
import { Language } from '../../../../utils/types/enums';
import type { ErrorType, FilterType, FollowUnfollowErrorType, Nullable } from '../../../../utils/types/common';
import type { IUser } from '../../../../utils/types/api';
import { contentText } from '../../../../utils/languageLocalization/contentText';
import { errorText } from '../../../../utils/languageLocalization/errorText';

type PropsType = {
  users: IUser[];
  page: number;
  pageSize: number;
  filter: FilterType;
  totalCount: number;
  isFetchingUsers: boolean;
  usersError: Nullable<ErrorType>;
  subscribersId: number[];
  followErrors: FollowUnfollowErrorType[];
  unfollowErrors: FollowUnfollowErrorType[];
  authorizedUserId: Nullable<number>;
  setPage: (currentPage: number) => void;
  setFilter: (term: string, friend: string) => void;
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  languageMode: string;
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
  authorizedUserId,
  setPage,
  setFilter,
  followUser,
  unfollowUser,
  languageMode,
}): ReactElement => {
  if (isFetchingUsers && !users.length) {
    return <Preloader />;
  }

  if (usersError) {
    const message = languageMode === Language.en ? usersError.message : errorText.users.ru;
    return <Error code={usersError.code} message={message} />;
  }

  return (
    <div className={classes.usersPageBlock}>
      <UsersSearchFormContainer
        page={page}
        filter={filter}
        authorizedUserId={authorizedUserId}
        setPage={setPage}
        setFilter={setFilter}
        isFetching={isFetchingUsers}
        languageMode={languageMode}
      />
      {!!users.length && (
        <Paginator
          page={page}
          pageSize={pageSize}
          totalCount={totalCount}
          onCurrentPage={setPage}
          isFetching={isFetchingUsers}
          languageMode={languageMode}
        />
      )}
      <div>
        {!isFetchingUsers && !users.length ? (
          <p className={classes.notFoundMessage}>{contentText.usersNotFound[languageMode]}</p>
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
                languageMode={languageMode}
              />
            )
          )
        )}
      </div>
    </div>
  );
};
