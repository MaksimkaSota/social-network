import type { IResponse } from '../../utils/types/api';
import { StatusCode } from '../../utils/types/enums';
import { followUser, unfollowUser } from '../../redux/thunks/users';
import { follow, unfollow, setSubscribersId } from '../../redux/actions/users';
import * as usersAPI from '../../api/http/users';

jest.mock('../../api/http/users');
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const result: IResponse = {
  data: {},
  messages: ['Success test'],
  resultCode: StatusCode.success,
};

describe('Users thunk tests', (): void => {
  it('Follow success ', async (): Promise<void> => {
    userAPIMock.followAPI.mockResolvedValue(result);

    const thunk = followUser(1);
    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setSubscribersId(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setSubscribersId(false, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, follow(1));

    userAPIMock.followAPI.mockClear();
  });

  it('Unfollow success', async (): Promise<void> => {
    userAPIMock.unfollowAPI.mockResolvedValue(result);

    const thunk = unfollowUser(1);
    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setSubscribersId(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setSubscribersId(false, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, unfollow(1));

    userAPIMock.unfollowAPI.mockClear();
  });
});
