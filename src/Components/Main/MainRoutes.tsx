import { lazy, memo, type ReactElement, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProfilePageContainer } from './Pages/ProfilePage/ProfilePageContainer';
import { Preloader } from '../Common/Preloader/Preloader';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';
import { useAuthRedirect } from '../../hooks/useRedirect';
import { RoutePath } from '../../utils/types/enums';

const PublicationsPageContainer = lazy(() => import('./Pages/PublicationsPage/PublicationsPageContainer'));
const UsersPageContainer = lazy(() => import('./Pages/UsersPage/UsersPageContainer'));
const LoginPageContainer = lazy(() => import('./Pages/LoginPage/LoginPageContainer'));
const ChatPage = lazy(() => import('./Pages/ChatPage/ChatPage'));

export const MainRoutes = memo((): ReactElement => {
  const authProfilePage = useAuthRedirect(<ProfilePageContainer />);
  const authPublicationsPage = useAuthRedirect(<PublicationsPageContainer />);
  const authChatPage = useAuthRedirect(<ChatPage />);

  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path={RoutePath.not_found} element={<NotFoundPage />} />
        <Route path={RoutePath.main} element={<Navigate to={RoutePath.profile} />} />
        <Route path={RoutePath.profile} element={authProfilePage} />
        <Route path={`${RoutePath.profile}/:id?`} element={<ProfilePageContainer />} />
        <Route path={RoutePath.publications} element={authPublicationsPage} />
        <Route path={RoutePath.users} element={<UsersPageContainer />} />
        <Route path={RoutePath.login} element={<LoginPageContainer />} />
        <Route path={RoutePath.chat} element={authChatPage} />
      </Routes>
    </Suspense>
  );
});
