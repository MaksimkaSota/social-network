import {
  follow,
  setPage,
  setSubscribersId,
  setTotalCount,
  setUsers,
  toggleIsFetchingUsers,
  unfollow
} from '../actions/users';
import { followAPI, getUsersAPI, unfollowAPI } from '../../api/users';

export const getUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingUsers(true));
    dispatch(setPage(page));
    getUsersAPI(page, pageSize)
      .then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetchingUsers(false));
      });
  };
};

export const followUser = (id) => {
  return (dispatch) => {
    dispatch(setSubscribersId(true, id));
    followAPI(id)
      .then((data) => {
        dispatch(setSubscribersId(false, id));
        if (data.resultCode === 0) {
          dispatch(follow(id));
        }
      });
  };
};

export const unfollowUser = (id) => {
  return (dispatch) => {
    dispatch(setSubscribersId(true, id));
    unfollowAPI(id)
      .then((data) => {
        dispatch(setSubscribersId(false, id));
        if (data.resultCode === 0) {
          dispatch(unfollow(id));
        }
      });
  };
};
