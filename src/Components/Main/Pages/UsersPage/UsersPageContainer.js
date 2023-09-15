import { UsersPage } from './UsersPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { follow, setUsers, unfollow } from '../../../../redux/actions/users';

export const UsersPageContainer = () => {
  const users = useSelector((state) => state.users.users);
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

  return (
    <UsersPage users={users} follow={followCallback} unfollow={unfollowCallback} setUsers={setUsersCallback} />
  );
};
