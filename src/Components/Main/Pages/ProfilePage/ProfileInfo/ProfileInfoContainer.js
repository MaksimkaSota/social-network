import { ProfileInfo } from './ProfileInfo';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMounted } from '../../../../../hooks/useMounted';
import { updateStatus } from '../../../../../redux/thunks/profile';
import { isFetchingStatusSelector } from '../../../../../redux/selectors/loading';
import { statusSelector } from '../../../../../redux/selectors/profile';

export const ProfileInfoContainer = ({profile, isOwner}) => {
  const status = useSelector(statusSelector);
  const isFetchingStatus = useSelector(isFetchingStatusSelector);

  const dispatch = useDispatch();
  const updateStatusCallback = useCallback(
    (status) => dispatch(updateStatus(status)),
    [dispatch]
  );

  const mounted = useMounted();

  return (
    mounted && <ProfileInfo profile={profile}
                            isOwner={isOwner}
                            status={status}
                            updateStatus={updateStatusCallback}
                            isFetchingStatus={isFetchingStatus} />
  );
};
