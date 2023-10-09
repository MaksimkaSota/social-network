import { UsersPage } from './UsersPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
  follow,
  setPage,
  setSubscribersId,
  setTotalCount,
  setUsers,
  toggleIsFetchingUsers,
  unfollow
} from '../../../../redux/actions/users';
import { useMounted } from '../../../../hooks/useMounted';
import { getUsersAPI } from '../../../../api/users';

export const UsersPageContainer = () => {
  const users = useSelector((state) => state.users.users);
  const page = useSelector((state) => state.users.page);
  const pageSize = useSelector((state) => state.users.pageSize);
  const totalCount = useSelector((state) => state.users.totalCount);
  const isFetchingUsers = useSelector((state) => state.users.isFetchingUsers);
  const subscribersId = useSelector((state) => state.users.subscribersId);

  const dispatch = useDispatch();
  const followCallback = useCallback(
    (id) => dispatch(follow(id)),
    [dispatch]
  );
  const unfollowCallback = useCallback(
    (id) => dispatch(unfollow(id)),
    [dispatch]
  );
  const setUsersCallback = useCallback(
    (users) => dispatch(setUsers(users)),
    [dispatch]
  );
  const setPageCallback = useCallback(
    (page) => dispatch(setPage(page)),
    [dispatch]
  );
  const setTotalCountCallback = useCallback(
    (totalCount) => dispatch(setTotalCount(totalCount)),
    [dispatch]
  );
  const toggleIsFetchingUsersCallback = useCallback(
    (isFetching) => dispatch(toggleIsFetchingUsers(isFetching)),
    [dispatch]
  );
  const setSubscribersIdCallback = useCallback(
    (isFetching, id) => dispatch(setSubscribersId(isFetching, id)),
    [dispatch]
  );

  const mounted = useMounted();

  useEffect(() => {
    dispatch(toggleIsFetchingUsers(true));
    dispatch(setPage(page));
    getUsersAPI(page, pageSize)
      .then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetchingUsers(false));
      });
  }, []);

  return (
    mounted && <UsersPage users={users}
                          follow={followCallback}
                          unfollow={unfollowCallback}
                          subscribersId={subscribersId}
                          setSubscribersId={setSubscribersIdCallback}
                          page={page}
                          pageSize={pageSize}
                          totalCount={totalCount}
                          setUsers={setUsersCallback}
                          setPage={setPageCallback}
                          setTotalCount={setTotalCountCallback}
                          isFetchingUsers={isFetchingUsers}
                          toggleIsFetchingUsers={toggleIsFetchingUsersCallback} />
  );
};
