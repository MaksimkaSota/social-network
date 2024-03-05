import type { FC, ReactElement } from 'react';
import { useCallback, useEffect } from 'react';
import { UsersPage } from './UsersPage';
import { useMounted } from '../../../../hooks/useMounted';
import { followUser, getUsers, unfollowUser } from '../../../../redux/thunks/users';
import { isFetchingUsersSelector } from '../../../../redux/selectors/loading';
import { usersErrorSelector } from '../../../../redux/selectors/error';
import {
  pageSelector,
  pageSizeSelector,
  subscribersIdSelector,
  totalCountSelector,
  usersSelector,
  followErrorsSelector,
  unfollowErrorsSelector,
} from '../../../../redux/selectors/users';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';

const UsersPageContainer: FC = (): ReactElement | boolean => {
  const users = useTypedSelector(usersSelector);
  const page = useTypedSelector(pageSelector);
  const pageSize = useTypedSelector(pageSizeSelector);
  const totalCount = useTypedSelector(totalCountSelector);
  const subscribersId = useTypedSelector(subscribersIdSelector);
  const isFetchingUsers = useTypedSelector(isFetchingUsersSelector);
  const usersError = useTypedSelector(usersErrorSelector);
  const followErrors = useTypedSelector(followErrorsSelector);
  const unfollowErrors = useTypedSelector(unfollowErrorsSelector);

  const dispatch = useTypedDispatch();
  const followUserCallback = useCallback((id: number) => dispatch(followUser(id)), [dispatch]);
  const unfollowUserCallback = useCallback((id: number) => dispatch(unfollowUser(id)), [dispatch]);
  const getUsersCallback = useCallback(
    (currentPage: number, currentPageSize: number) => dispatch(getUsers(currentPage, currentPageSize)),
    [dispatch]
  );

  const mounted: boolean = useMounted();

  useEffect(() => {
    dispatch(getUsers(page, pageSize));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    mounted && (
      <UsersPage
        users={users}
        page={page}
        pageSize={pageSize}
        totalCount={totalCount}
        isFetchingUsers={isFetchingUsers}
        usersError={usersError}
        subscribersId={subscribersId}
        followErrors={followErrors}
        unfollowErrors={unfollowErrors}
        followUser={followUserCallback}
        unfollowUser={unfollowUserCallback}
        getUsers={getUsersCallback}
      />
    )
  );
};

export default UsersPageContainer;
