import { type FC, type ReactElement, useCallback } from 'react';
import { UsersPage } from './UsersPage';
import { useMounted } from '../../../../hooks/useMounted';
import { useSearchParameters } from '../../../../hooks/useSearchParameters';
import { useTypedDispatch } from '../../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { authSelector, usersSelector, viewSelector } from '../../../../redux/selectors/selectors';
import { isFetchingUsersSelector } from '../../../../redux/selectors/loading';
import { usersErrorSelector } from '../../../../redux/selectors/error';
import { setFilter, setPage } from '../../../../redux/actions/users';
import { followUser, unfollowUser } from '../../../../redux/thunks/users';

const UsersPageContainer: FC = (): ReactElement | boolean => {
  const { id: authorizedUserId } = useTypedSelector(authSelector);
  const { users, page, pageSize, filter, totalCount, subscribersId, followErrors, unfollowErrors } =
    useTypedSelector(usersSelector);
  const isFetchingUsers = useTypedSelector(isFetchingUsersSelector);
  const usersError = useTypedSelector(usersErrorSelector);
  const { languageMode, themeMode } = useTypedSelector(viewSelector);

  const dispatch = useTypedDispatch();
  const followUserCallback = useCallback((id: number) => dispatch(followUser(id)), [dispatch]);
  const unfollowUserCallback = useCallback((id: number) => dispatch(unfollowUser(id)), [dispatch]);
  const setPageCallback = useCallback((currentPage: number) => dispatch(setPage(currentPage)), [dispatch]);
  const setFilterCallback = useCallback(
    (term: string, friend: string) => dispatch(setFilter(term, friend)),
    [dispatch]
  );

  const mounted: boolean = useMounted();

  useSearchParameters(languageMode, themeMode, filter, page, pageSize);

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
        languageMode={languageMode}
      />
    )
  );
};

export default UsersPageContainer;
