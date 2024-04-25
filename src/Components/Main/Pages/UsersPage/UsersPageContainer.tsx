import type { FC, ReactElement } from 'react';
import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UsersPage } from './UsersPage';
import { useMounted } from '../../../../hooks/useMounted';
import { followUser, getUsers, unfollowUser } from '../../../../redux/thunks/users';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { setFilter, setPage } from '../../../../redux/actions/users';
import { authSelector, usersSelector } from '../../../../redux/selectors/selectors';
import { isFetchingUsersSelector } from '../../../../redux/selectors/loading';
import { usersErrorSelector } from '../../../../redux/selectors/error';

const UsersPageContainer: FC = (): ReactElement | boolean => {
  const { id: authorizedUserId } = useTypedSelector(authSelector);
  const { users, page, pageSize, filter, totalCount, subscribersId, followErrors, unfollowErrors } =
    useTypedSelector(usersSelector);
  const isFetchingUsers = useTypedSelector(isFetchingUsersSelector);
  const usersError = useTypedSelector(usersErrorSelector);

  const dispatch = useTypedDispatch();
  const followUserCallback = useCallback((id: number) => dispatch(followUser(id)), [dispatch]);
  const unfollowUserCallback = useCallback((id: number) => dispatch(unfollowUser(id)), [dispatch]);
  const setPageCallback = useCallback((currentPage: number) => dispatch(setPage(currentPage)), [dispatch]);
  const setFilterCallback = useCallback(
    (term: string, friend: string) => dispatch(setFilter(term, friend)),
    [dispatch]
  );

  const mounted: boolean = useMounted();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const parsedSearchParams = Object.fromEntries(searchParams);

    const actualTerm = parsedSearchParams.term || filter.term;
    const actualFriend = parsedSearchParams.friend || filter.friend;
    const actualPage = +parsedSearchParams.page || page;

    const actualFilter = { term: actualTerm, friend: actualFriend };

    dispatch(getUsers(actualPage, pageSize, actualFilter));
    // eslint-disable-next-line
  }, [dispatch, searchParams]);

  useEffect(() => {
    const queryObject: Partial<{ term: string; friend: string; page: string }> = {};

    if (filter.term) {
      queryObject.term = filter.term;
    }
    if (filter.friend) {
      queryObject.friend = filter.friend;
    }
    if (page !== 1) {
      queryObject.page = String(page);
    }

    const queryString = new URLSearchParams(queryObject).toString();

    setSearchParams(queryString);
    // eslint-disable-next-line
  }, [filter, page]);

  return (
    mounted && (
      <UsersPage
        users={users}
        page={page}
        pageSize={pageSize}
        filter={filter}
        totalCount={totalCount}
        isFetchingUsers={isFetchingUsers}
        usersError={usersError}
        subscribersId={subscribersId}
        followErrors={followErrors}
        unfollowErrors={unfollowErrors}
        authorizedUserId={authorizedUserId}
        followUser={followUserCallback}
        unfollowUser={unfollowUserCallback}
        setPage={setPageCallback}
        setFilter={setFilterCallback}
      />
    )
  );
};

export default UsersPageContainer;
