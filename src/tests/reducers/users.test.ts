import { follow, unfollow } from '../../redux/actions/users';
import { usersReducer } from '../../redux/reducers/users';
import type { UsersState } from '../../redux/types/users';

const state: UsersState = {
  users: [
    {
      id: 0,
      name: 'Max',
      followed: true,
      photos: { small: null, large: null },
      status: 'Hi',
    },
    {
      id: 1,
      name: 'Eugene',
      followed: false,
      photos: { small: null, large: null },
      status: 'Hey',
    },
    {
      id: 2,
      name: 'Yuri',
      followed: false,
      photos: { small: null, large: null },
      status: 'Hello',
    },
  ],
  page: 1,
  pageSize: 10,
  totalCount: 3,
  subscribersId: [],
  followErrors: [],
  unfollowErrors: [],
  filter: {
    term: '',
    friend: '',
  },
};

describe('Users reducer tests', (): void => {
  it('Follow success', (): void => {
    const action = follow(1);
    const newState = usersReducer(state, action);

    expect(newState.users[0].followed).toBeTruthy();
    expect(newState.users[1].followed).toBeTruthy();
  });

  it('Unfollow success', (): void => {
    const action = unfollow(0);
    const newState = usersReducer(state, action);

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeFalsy();
  });
});
