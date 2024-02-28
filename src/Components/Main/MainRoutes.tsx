import React, { FC, ReactElement, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NewsPage } from './Pages/NewsPage/NewsPage';
import { MusicsPage } from './Pages/MusicsPage/MusicsPage';
import { SettingsPage } from './Pages/SettingsPage/SettingsPage';
import { useAuthRedirect } from '../../hooks/useRedirect';
import { ProfilePageContainer } from './Pages/ProfilePage/ProfilePageContainer';
import { Preloader } from '../Common/Preloader/Preloader';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage';

const MessagesPageContainer = React.lazy(() => import('./Pages/MessagesPage/MessagesPageContainer'));
const UsersPageContainer = React.lazy(() => import('./Pages/UsersPage/UsersPageContainer'));
const LoginPageContainer = React.lazy(() => import('./Pages/LoginPage/LoginPageContainer'));

export const MainRoutes: FC = (): ReactElement => {
  const authProfilePage = useAuthRedirect(<ProfilePageContainer />);
  const authMessagesPage = useAuthRedirect(<MessagesPageContainer />);

  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={authProfilePage} />
        <Route path="/profile/:id?" element={<ProfilePageContainer />} />
        <Route path="/messages/*" element={authMessagesPage} />
        <Route path="/users" element={<UsersPageContainer />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/musics" element={<MusicsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<LoginPageContainer />} />
      </Routes>
    </Suspense>
  );
};
