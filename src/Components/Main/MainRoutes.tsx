import React, { FC, ReactElement, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NewsPage } from './Pages/NewsPage/NewsPage';
import { MusicsPage } from './Pages/MusicsPage/MusicsPage';
import { SettingsPage } from './Pages/SettingsPage/SettingsPage';
import { useAuthRedirect } from '../../hooks/useRedirect';
import { ProfilePageContainer } from './Pages/ProfilePage/ProfilePageContainer';
import { Preloader } from '../Common/Preloader/Preloader';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';
import { RoutePath } from '../../utils/types/common';

const MessagesPageContainer = React.lazy(() => import('./Pages/MessagesPage/MessagesPageContainer'));
const UsersPageContainer = React.lazy(() => import('./Pages/UsersPage/UsersPageContainer'));
const LoginPageContainer = React.lazy(() => import('./Pages/LoginPage/LoginPageContainer'));

export const MainRoutes: FC = (): ReactElement => {
  const authProfilePage = useAuthRedirect(<ProfilePageContainer />);
  const authMessagesPage = useAuthRedirect(<MessagesPageContainer />);

  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path={RoutePath.not_found} element={<NotFoundPage />} />
        <Route path={RoutePath.main} element={<Navigate to={RoutePath.profile} />} />
        <Route path={RoutePath.profile} element={authProfilePage} />
        <Route path={`${RoutePath.profile}/:id?`} element={<ProfilePageContainer />} />
        <Route path={`${RoutePath.messages}/*`} element={authMessagesPage} />
        <Route path={RoutePath.users} element={<UsersPageContainer />} />
        <Route path={RoutePath.news} element={<NewsPage />} />
        <Route path={RoutePath.musics} element={<MusicsPage />} />
        <Route path={RoutePath.settings} element={<SettingsPage />} />
        <Route path={RoutePath.login} element={<LoginPageContainer />} />
      </Routes>
    </Suspense>
  );
};
