import { UsersPage } from './UsersPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useMounted } from '../../../../hooks/useMounted';
import { followUser, getUsers, unfollowUser } from '../../../../redux/thunks/users';

export const UsersPageContainer = () => {
  const users = useSelector((state) => state.users.users);
  const page = useSelector((state) => state.users.page);
  const pageSize = useSelector((state) => state.users.pageSize);
  const totalCount = useSelector((state) => state.users.totalCount);
  const isFetchingUsers = useSelector((state) => state.loading.SET_USERS);
  const subscribersId = useSelector((state) => state.users.subscribersId);

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
