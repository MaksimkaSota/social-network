import { ProfilePage } from './ProfilePage';
import { useAuthRedirect } from '../../../../hooks/useRedirect';

export const ProfilePageContainer = () => {
  const Component = useAuthRedirect(<ProfilePage />);
  return Component;
};
