import { SET_USERS, FOLLOW, UNFOLLOW } from '../types/users';

export const setUsers = (users) => ({type: SET_USERS, payload: users});
export const follow = (id) => ({type: FOLLOW, payload: id});
export const unfollow = (id) => ({type: UNFOLLOW, payload: id});
