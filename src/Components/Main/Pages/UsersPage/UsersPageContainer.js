import { useDispatch, useSelector } from 'react-redux';
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

const UsersPageContainer = () => {
  const users = useSelector(usersSelector);
  const page = useSelector(pageSelector);
  const pageSize = useSelector(pageSizeSelector);
  const totalCount = useSelector(totalCountSelector);
  const subscribersId = useSelector(subscribersIdSelector);
  const isFetchingUsers = useSelector(isFetchingUsersSelector);
  const usersError = useSelector(usersErrorSelector);
  const followErrors = useSelector(followErrorsSelector);
  const unfollowErrors = useSelector(unfollowErrorsSelector);

  const dispatch = useDispatch();
  const followUserCallback = useCallback((id) => dispatch(followUser(id)), [dispatch]);
  const unfollowUserCallback = useCallback((id) => dispatch(unfollowUser(id)), [dispatch]);
  const getUsersCallback = useCallback(
    (currentPage, currentPageSize) => dispatch(getUsers(currentPage, currentPageSize)),
    [dispatch]
  );

  const mounted = useMounted();

  useEffect(() => {
    dispatch(getUsers(page, pageSize));
  }, []);

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
