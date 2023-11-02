import { UsersPage } from './UsersPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useMounted } from '../../../../hooks/useMounted';
import { followUser, getUsers, unfollowUser } from '../../../../redux/thunks/users';
import { isFetchingUsersSelector } from '../../../../redux/selectors/loading';
import {
  pageSelector,
  pageSizeSelector,
  subscribersIdSelector,
  totalCountSelector,
  usersSelector
} from '../../../../redux/selectors/users';

export const UsersPageContainer = () => {
  const users = useSelector(usersSelector);
  const page = useSelector(pageSelector);
  const pageSize = useSelector(pageSizeSelector);
  const totalCount = useSelector(totalCountSelector);
  const subscribersId = useSelector(subscribersIdSelector);
  const isFetchingUsers = useSelector(isFetchingUsersSelector);

  const dispatch = useDispatch();
  const followUserCallback = useCallback(
    (id) => dispatch(followUser(id)),
    [dispatch]
  );
  const unfollowUserCallback = useCallback(
    (id) => dispatch(unfollowUser(id)),
    [dispatch]
  );
  const getUsersCallback = useCallback(
    (page, pageSize) => dispatch(getUsers(page, pageSize)),
    [dispatch]
  );

  const mounted = useMounted();

  useEffect(() => {
    dispatch(getUsers(page, pageSize));
  }, []);

  return (
    mounted && <UsersPage users={users}
                          page={page}
                          pageSize={pageSize}
                          totalCount={totalCount}
                          isFetchingUsers={isFetchingUsers}
                          subscribersId={subscribersId}
                          followUser={followUserCallback}
                          unfollowUser={unfollowUserCallback}
                          getUsers={getUsersCallback} />
  );
};
