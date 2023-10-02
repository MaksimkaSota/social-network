import { UsersPage } from './UsersPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { follow, setUsers, unfollow } from '../../../../redux/actions/users';
import { http } from '../../../../api/http';

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

  useEffect(() => {
    http.get('users')
      .then((response) => {
        dispatch(setUsers(response.data.items));
      });
  }, []);

  return (
    <UsersPage users={users} follow={followCallback} unfollow={unfollowCallback} />
  );
};
