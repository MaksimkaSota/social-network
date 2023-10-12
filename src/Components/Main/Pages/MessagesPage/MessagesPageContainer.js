import { MessagesPage } from './MessagesPage';
import { useAuthRedirect } from '../../../../hooks/useRedirect';

export const MessagesPageContainer = () => {
  const Component = useAuthRedirect(<MessagesPage />);
  return Component;
};
