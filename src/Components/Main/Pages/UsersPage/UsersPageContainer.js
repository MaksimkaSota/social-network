import { UsersPage } from './UsersPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { follow, setPage, setTotalCount, setUsers, toggleIsFetching, unfollow } from '../../../../redux/actions/users';
import { http } from '../../../../api/http';

export const UsersPageContainer = () => {
  const users = useSelector((state) => state.users.users);
  const page = useSelector((state) => state.users.page);
  const pageSize = useSelector((state) => state.users.pageSize);
  const totalCount = useSelector((state) => state.users.totalCount);
  const isFetching = useSelector((state) => state.users.isFetching);

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
  const toggleIsFetchingCallback = useCallback(
    (isFetching) => dispatch(toggleIsFetching(isFetching)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(toggleIsFetching(true));
    dispatch(setPage(page));
    http.get(`users?page=${page}&count=${pageSize}`)
      .then((response) => {
        dispatch(setUsers(response.data.items));
        dispatch(setTotalCount(response.data.totalCount));
        dispatch(toggleIsFetching(false));
      });
  }, []);

  return (
    <UsersPage users={users}
               follow={followCallback}
               unfollow={unfollowCallback}
               page={page}
               pageSize={pageSize}
               totalCount={totalCount}
               setUsers={setUsersCallback}
               setPage={setPageCallback}
               setTotalCount={setTotalCountCallback}
               isFetching={isFetching}
               toggleIsFetching={toggleIsFetchingCallback}
    />
  );
};
